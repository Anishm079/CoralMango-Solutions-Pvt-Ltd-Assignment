import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import UsersListView from "./UsersListView";
import UsersCardView from "./UsersCardView";

let userData = [];

function Home() {
  const [usersData, setUsersData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [tab, setTab] = useState(false);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState({ category: "name", order: null });
  const [alert, setAlert] = useState(false)

  const navigate = useNavigate();

  function sortData(category, ord) {
    const sortedData = [...usersData];
    sortedData.sort((a, b) => {
      if (category === "name") {
        return ord === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      } else if (category === "age") {
        return ord === "asc" ? a.age - b.age : b.age - a.age;
      }
      return 0;
    });
    setUsersData(sortedData);
    setAlert(true)
  }

  function handleTabChange(e) {
    setTab(e.target.id === "cardview");
  }

  useEffect(() => {
    if (!localStorage.getItem("user-exist")) {
      navigate("/login");
      return;
    }
    async function fetchData() {
      try {
        const res = await fetch("https://coralmango.com/api/react-test");
        if (res.ok) {
          const data = await res.json();
          setUsersData(data);
          userData = data;
        } else {
          console.log("Error fetching data");
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (order.order && order.order !== "-select-") {
      sortData(order.category, order.order);
    }
    // console.log(order.category)
    if (order.order === "-select-"){
      setAlert(false)
    }
  }, [order]);

  
  useEffect(()=>{
    if(search.length){
      const filter=userData.filter((user)=>user.name.toLowerCase().includes(search.toLowerCase()))
      setUsersData(filter)
    }else{
      setUsersData(userData)
    }
  },[search])

  return (
    <div className="home-page">
      <div className="home-details-container">
      <div className="alert-msg">{alert==true && <h4>You are viewing filtered results!</h4>}</div>
        <div className="view-selection-container">
          <div className="view-select-button">
            <input
              type="radio"
              defaultChecked
              onChange={handleTabChange}
              id="listview"
              name="view"
              value="list_view"
            />
            <label htmlFor="listview">List View</label>
          </div>
          <div className="view-select-button">
            <input
              type="radio"
              onChange={handleTabChange}
              id="cardview"
              name="view"
              value="card_view"
            />
            <label htmlFor="cardview">Card View</label>
          </div>
        </div>
        <div className="searchbar-container">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search name"
          />
          <SearchIcon />
        </div>
        <div className="details-filter-container">
          <h5>filter by</h5>
          <select
            onChange={(e) => {
              setOrder((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
            name="category"
          >
            <option>name</option>
            <option>age</option>
          </select>
          <h5>in</h5>
          <select
            onChange={(e) => {
              setOrder((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
            name="order"
          >
            <option>-select-</option>
            <option>asc</option>
            <option>desc</option>
          </select>
          <h5>order</h5>
        </div>
        <div className="users-details-container">
          <h2> &larr; User Details &rarr;</h2>
          {!tab ? (
            <UsersListView
              usersData={usersData}
              searchText={search}
            />
          ) : (
            <UsersCardView
              usersData={usersData}
              searchText={search}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
