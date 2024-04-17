import { Route, Routes } from "react-router-dom";
import Register from "./components/register/Register";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
    </Routes>
  );
}
