import {Routes, Route} from 'react-router-dom';
import './App.css'
import Register from './components/Register.jsx';
import Dashboard from './components/Dashboard.jsx';
import Login from './components/Login.jsx';


function App() {

  return (
      <Routes>
          <Route path="/login" element={<Register />}/>
          <Route path="/que" element={<Login />}/>
          <Route path="/" element={<Dashboard />}/>
      </Routes>
  )
}



export default App
