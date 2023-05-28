import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import paint from "../assets/paint.png";
import left from "../assets/left.png";
import right from "../assets/right.png";
import middle from "../assets/middle.png";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Login() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();
    let form = new FormData(e.target);
    if(form.get('username')=="demo@coralmango.com" && form.get('password')=="demo123"){
      localStorage.setItem('user-exist','true')
      return navigate('/')
    }
    setOpen(true)
    setTimeout(()=>{
      setOpen(false)
    },2000)
  }

  useEffect(()=>{
    localStorage.clear('user-exist')
  },[])

  return (
    <div className="login-page">
      <div className="login-paints">
        <img className="bkgd" src={paint} width={"100%"} height={"800px"} />
        <div className="cartoons">
          <div>
            <img src={middle} width={"125em"} height={"200px"} />
          </div>
          <div>
            <img src={left} width={"125em"} height={"200px"} />
          </div>
          <div>
            <img src={right} width={"125em"} height={"200px"} />
          </div>
        </div>
      </div>
      <div className="login-container">
        <div className="login-details">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <hr/>
            <div className="all-fields">
              <div>
                <TextField
                  error={open}
                  id="username"
                  name="username"
                  label="username"
                  variant="standard"
                  sx={{margin:"0px 0px"}} 
                  helperText={open?"Incorrect entry.":""}
                />
                <TextField
                  error={open}
                  id="password"
                  name="password"
                  label="password"
                  variant="standard"
                  sx={{margin:"0px 0px",color:"white"}} 
                  helperText={open?"Incorrect entry.":""}
                />
                {open===true &&<p style={{margin:"5px 0px",color:"red",fontSize:"1rem"}} >Enter valid credentials</p>}
              </div>
            </div>
                <Button type="submit" variant="contained" sx={{margin:"2em 0px",padding:"0.5em 10em"}} >LOGIN</Button>
          </form>
        </div>
      </div>
      {/* snackbar code */}
      <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000}>
        <Alert severity="error" key={"bottomright"} anchorOrigin={{ vertical:"bottom", horizontal:"right" }} sx={{ width: '100%' }}>
          Enter Valid Credentials !!!
        </Alert>
      </Snackbar>
      </Stack>
    </div>
  );
}

export default Login;
