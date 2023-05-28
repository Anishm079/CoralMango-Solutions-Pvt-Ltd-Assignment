import React from 'react'

function UsersList({usersData}) {

  return (
    <div className='users-table-container' >
      <table  cellPadding="pixels" cellSpacing="pixels">
        <thead>
          <tr>
            <th>username</th>
            <th>age</th>
            <th>occupation</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user,index)=><tr key={user.name+index}>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.occupation}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default UsersList