// import  { useEffect, useState } from "react";
import {Routes, Route} from 'react-router-dom';
import Dashboard from '../views/dashboard/Dashboard';
import Register from '../views/register/Register';
import User from '../views/users/User';

function App() {
  // const [users, setUsers] = useState([]);

  // const fetchUsers = async () => {
  //   const response = await fetch('http://localhost:3000/users');
  //   const data = await response.json();
  //   setUsers(data);
  //   console.log(data);
  // };

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  return (
    <Routes>
      <Route path="/" element = {<Dashboard />} />
      <Route path="/register" element = {<Register />} />
      <Route path="/user/:id" element = {<User />} />
    </Routes>
  );
}

export default App;


{/* <>
<h1 style={{
  color: 'purple', 
  textAlign: 'center', 
  textShadow: '1px 1px 2px silver, 0 0 25px silver, 0 0 5px darkgray'
}}>Integration</h1>
<div style={{ display: 'flex', justifyContent: 'center' }}>
  <table style={{ 
    width: '80%', 
    backgroundColor: 'gray', 
    color: 'purple', 
    borderCollapse: 'collapse',
    margin: 'auto'
  }}>
    <thead>
      <tr style={{ 
        backgroundImage: 'linear-gradient(to right, silver, gray)', 
        color: 'black'
      }}>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {users.map(user => (
        <tr key={user.id} style={{ textAlign: 'center' }}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</> */}