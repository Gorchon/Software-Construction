import Card from '../dashboard/components/card';
import { useEffect, useState } from 'react';
import NavigationBar from '../../src/shared/NavigationBar';
// /Users/chema./Documents/Programming/computational methods/Software Construction/userIntegrattioon/ingeration/src/shared/NavigationBar.jsx

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

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

  const filteredUsers = users.filter(user => user?.name?.toLowerCase().includes(search.toLowerCase()));

  return (
    <NavigationBar>
      <div>
          <input 
          value={search}
            onChange={(e) => setSearch(e.target.value)}
          style={{ border: '2px solid black', width: '200px', borderRadius: '10px', height: '30px', padding: '2px 5px', fontSize: '16px' }} type="text" />

          <h1>Dashboard</h1>
          <div>
              {filteredUsers.map(user => (
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