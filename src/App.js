import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Admin />
      </BrowserRouter>
    </div>
  );
}

export default App;
