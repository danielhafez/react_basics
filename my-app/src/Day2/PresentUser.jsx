import React from 'react';
import './users.css';
import users from './user-data';

function PresentUsers() {
  return (
    <div className='users'>
      {users.map((user, index) => (
        <div key={index}>
          <h3>{user.first_name}</h3>
          <p>{user.country}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default PresentUsers;
