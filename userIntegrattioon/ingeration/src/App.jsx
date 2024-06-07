// import  { useEffect, useState } from "react";
import {Routes, Route} from 'react-router-dom';
import Dashboard from '../views/dashboard/Dashboard';
import Register from '../views/register/Register';
import User from '../views/users/User';
import NavigationBar from '../src/shared/NavigationBar';

function App() {


  return (
    <Routes>
      <Route path="/" element = { <NavigationBar><Dashboard /></NavigationBar> } />
      
      <Route path="/register" element = {<NavigationBar><Register /></NavigationBar>} />
      <Route path="/user/:id" element = { <NavigationBar><User /></NavigationBar>} />
    </Routes>
  );
}

export default App;


