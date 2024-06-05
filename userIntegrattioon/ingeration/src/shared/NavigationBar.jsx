
import { BiHomeAlt } from "react-icons/bi";
// import PropTypes from 'prop-types';

import { useState } from "react";

import React from "react";

// eslint-disable-next-line react/prop-types
const NavigationBar = ({children}) => {
    const [name, setName] = useState("");

    const handleNavigate = (route) => {
        window.location.pathname = route;
    }

    const handleNameChange = (event) => {
      setName(event.target.value);
    }


    return (
        <div style={{
            width: "100%", 
            height: '40px',
            boxShadow: '0px 4px 8px rgba(0,0,0,0.1)'
            }}>

        <div style={{display: 'flex'}}>
        <div onClick={() => handleNavigate("/")} style={{display: 'flex', cursor: 'pointer'}}>
        <BiHomeAlt style={{marginTop: '10px', height: '35px'}} />
        <p>Dashboard</p>
        </div>
        <div onClick={() => handleNavigate("/register")} style={{display: 'flex', cursor: 'pointer'}}>
        <p>Register</p>
        </div>

        <input style={{
            border: "2px black solid",
            width: "150px",
            height: "25px",
            borderRadius: '10px'}}  
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
}

export default NavigationBar;