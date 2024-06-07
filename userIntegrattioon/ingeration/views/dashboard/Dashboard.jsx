import  { useEffect, useState } from 'react';
import Card from '../dashboard/components/card';
import './Dashboard.css'; // Create a CSS file for styling

// eslint-disable-next-line react/prop-types
function Dashboard({ name }) {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="dashboard">
      <h1>Registers</h1>
      <div className="card-container">
        {users.map((user) => {
          if (name && !user?.name?.includes(name)) return null;
          return (
            <div key={user.id} className="card-wrapper">
              <Card user={user} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
