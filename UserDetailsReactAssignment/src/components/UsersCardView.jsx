import React from 'react'
import PersonIcon from '@mui/icons-material/Person';

function UsersCardView({usersData}) {

  return (
    <div className='user-tab-view'>
      <div className='users-container'>
        {usersData.map((user,index)=>
          <div className='user-card' key={user.name+index}>
            <div className='avatar'>
              <PersonIcon/>
            </div>
            <ul className='user-details'>
              <li><h3>{user.name}</h3></li>
              <li><p style={{fontSize:"17px"}} >{user.occupation}</p></li>
              <li><p style={{fontSize:"15px"}}>{user.age} years</p></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default UsersCardView