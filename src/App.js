import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
