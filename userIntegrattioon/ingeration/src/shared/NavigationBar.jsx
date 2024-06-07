
import { BiHomeAlt } from "react-icons/bi";
// import PropTypes from 'prop-types';

import { useState } from "react";

import React from "react";

// eslint-disable-next-line react/prop-types
const NavigationBar = ({children}) => {
  const [name, setName] = useState("");

  const handleNavigate = (route) => {
    window.location.pathname = route;
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div style={{
      width: "100%",
      backgroundColor: '#000021',
      boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
      padding: '10px 20px',
      borderBottom: '4px solid #7749DE'
    }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: '20px' // Adds space between items
      }}>
        <div onClick={() => handleNavigate("/")} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', color: 'white', fontSize: '1.2rem' }}>
          <BiHomeAlt style={{ marginRight: '10px', height: '35px' }} />
          <p>Dashboard</p>
        </div>
        <div onClick={() => handleNavigate("/register")} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', color: 'white', fontSize: '1.2rem' }}>
          <p>Register</p>
        </div>
        <input
          style={{
            border: "2px solid black",
            width: "150px",
            height: "30px",
            borderRadius: '10px',
            padding: '5px',
            fontSize: '1rem'
          }}
          type="text"
          placeholder="Filtrar por nombre"
          onChange={handleNameChange}
        />
      </div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { name });
      })}
    </div>
  );
};

export default NavigationBar;