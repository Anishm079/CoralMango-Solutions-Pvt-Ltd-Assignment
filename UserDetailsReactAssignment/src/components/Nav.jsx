import {useState,useEffect} from 'react'
import { Link , useNavigate } from 'react-router-dom'
import butterfly from '../assets/butterfly.png'
function Nav() {
  const [isLogin,setIsLogin] = useState(false);

  const navigate=useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('user-exist')){
      navigate('/login')
    }
    else setIsLogin(true);
  },[])

  return (
    <nav className='nav'>
      <ul>
        <li className='company-logo'>
          <Link to='/'>
            <img src={butterfly} alt='LoGo' width={'40px'} height={'50px'} />
          </Link>
        </li>
        <li>
            <Link to='/'>Home</Link>
        </li>
      </ul>
        {isLogin===true && <div className='logout-button'>
              <Link to='/login' >Logout</Link>
        </div>}  
    </nav>
  )
}

export default Nav