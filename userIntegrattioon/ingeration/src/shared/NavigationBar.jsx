// eslint-disable react/prop-types
import { BiHomeAlt } from "react-icons/bi";
import PropTypes from 'prop-types';

const handleNavigate = (route) => {
    window.location.pathname = route;
}

const NavigationBar = ({ children }) => {
  return (
    <div style={{ height: '60px', width: '100%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '10px 20px', backgroundColor: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginRight: '20px' }} onClick={() => handleNavigate('/')}>
            <p style={{ margin: '0 10px 0 0' }}>Dashboard</p>
            <BiHomeAlt />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => handleNavigate('/register')}>
            <p style={{ margin: '0 10px 0 0' }}>Registro</p>
            <input style={{ border: '2px solid black', width: '200px', borderRadius: '10px', height: '30px', padding: '2px 5px', fontSize: '16px' }} type="text" />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

NavigationBar.propTypes = {
  children: PropTypes.node
};

export default NavigationBar;
