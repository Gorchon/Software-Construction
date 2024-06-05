import Card from '../dashboard/components/card';
import { useEffect, useState } from 'react';
import NavigationBar from '../../src/shared/NavigationBar';
// /Users/chema./Documents/Programming/computational methods/Software Construction/userIntegrattioon/ingeration/src/shared/NavigationBar.jsx

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
    <NavigationBar>
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
      </NavigationBar>
  );
}

export default Dashboard;