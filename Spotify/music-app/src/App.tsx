import { Route, Routes } from "react-router-dom";
import Register from "./components/register/Register";
import "./App.css";
import { Dashboard } from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
