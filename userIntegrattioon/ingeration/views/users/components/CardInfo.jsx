/*eslint-disable*/
import userImg from '../../../src/assets/userImg.svg';

export const CardInfo = ({ user }) => {
  return (
    <div style={{
      width: '300px',
      height: '400px',
      backgroundColor: '#df3078',
      boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
      borderRadius: '10px',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <img src={userImg} alt="User Avatar" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
      <p style={{ margin: '10px 0', color: '#fff', fontWeight: 'bold' }}>{user.name}</p>
      <p style={{ margin: '10px 0', color: '#fff' }}>{user.email}</p>
      <p style={{ margin: '10px 0', color: '#fff' }}>{user.address}</p>
      <p style={{ margin: '10px 0', color: '#fff' }}>{user.phone}</p>
      <p style={{ margin: '10px 0', color: '#fff' }}>{user.age}</p>
      <p style={{ margin: '10px 0', color: '#fff' }}>{user.gender}</p>
      
    </div>
  );
};
