import Card from '../dashboard/components/card';
import { useEffect, useState } from 'react';

function Dashboard() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
      try {
          const response = await fetch('http://localhost:3000/users');
          const data = await response.json();
          setUsers(data);
      } catch (error) {
          console.error('Failed to fetch users:', error);
      }
  };

  useEffect(() => {
      fetchUsers();
  }, []);

  return (
      <div>
          <h1>Dashboard</h1>
          <div>
              {users.map(user => (
                  <div key={user.id}>
                      <Card user={user} />
                  </div>
              ))}
          </div>
      </div>
  );
}

export default Dashboard;