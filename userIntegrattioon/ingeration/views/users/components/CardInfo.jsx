/*eslint-disable*/
import userImg from '../../../src/assets/userImg.svg';

export const CardInfo = ({ user }) => {
  return (
    <div style={{
      width: '300px',
      backgroundColor: '#12142F', // Updated background color
      boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
      borderRadius: '10px',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{ 
        width: '100px', 
        height: '100px', 
        borderRadius: '50%', 
        backgroundColor: 'silver', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <img src={userImg} alt="User Avatar" style={{ width: '90px', height: '90px', borderRadius: '50%' }} />
      </div>
      {user.name && (
        <div style={{
          width: '100%',
          backgroundColor: '#2B2645',
          borderRadius: '10px',
          padding: '10px',
          marginTop: '10px',
          textAlign: 'center'
        }}>
          <p style={{ margin: '10px 0', color: '#fff', fontWeight: 'bold' }}>{user.name}</p>
        </div>
      )}
      {user.email && (
        <div style={{
          width: '100%',
          backgroundColor: '#2B2645',
          borderRadius: '10px',
          padding: '10px',
          marginTop: '10px',
          textAlign: 'center'
        }}>
          <p style={{ margin: '10px 0', color: '#fff' }}>{user.email}</p>
        </div>
      )}
      {user.address && (
        <div style={{
          width: '100%',
          backgroundColor: '#2B2645',
          borderRadius: '10px',
          padding: '10px',
          marginTop: '10px',
          textAlign: 'center'
        }}>
          <p style={{ margin: '10px 0', color: '#fff' }}>{user.address}</p>
        </div>
      )}
      {user.phone && (
        <div style={{
          width: '100%',
          backgroundColor: '#2B2645',
          borderRadius: '10px',
          padding: '10px',
          marginTop: '10px',
          textAlign: 'center'
        }}>
          <p style={{ margin: '10px 0', color: '#fff' }}>{user.phone}</p>
        </div>
      )}
      {user.age && (
        <div style={{
          width: '100%',
          backgroundColor: '#2B2645',
          borderRadius: '10px',
          padding: '10px',
          marginTop: '10px',
          textAlign: 'center'
        }}>
          <p style={{ margin: '10px 0', color: '#fff' }}>{user.age}</p>
        </div>
      )}
      {user.gender && (
        <div style={{
          width: '100%',
          backgroundColor: '#2B2645',
          borderRadius: '10px',
          padding: '10px',
          marginTop: '10px',
          textAlign: 'center'
        }}>
          <p style={{ margin: '10px 0', color: '#fff' }}>{user.gender}</p>
        </div>
      )}
    </div>
  );
};
