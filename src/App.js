//import logo from './logo.svg';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import LoginNewFrom from "./components/login/LoginNewFrom";
import Profile from "./components/Profile/Profile"

import Verify from "./components/login/Verify";
import Forgot from "./components/login/Forgot";
import { useSelector } from "react-redux";

function App() {
  

  const isAuth=useSelector(state=>state.auth.isLoggedIn)

  return (
    <div className="App">
      {!isAuth&& <LoginNewFrom />}
      <Routes>
        {!isAuth && <Route path="/forget" element={<Forgot />} />}

        {isAuth && <Route path="/" element={<Home />} />}

        {isAuth && <Route path="/about" element={<Profile />} />}

        {isAuth && <Route path="/verify" element={<Verify />} />}
      </Routes>
    </div>
  );
}

export default App;
