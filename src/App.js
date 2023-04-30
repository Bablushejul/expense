//import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home/Home';
import LoginNewFrom from"./components/login/LoginNewFrom"
import Profile from './components/Profile/Profile';
import { useContext } from 'react';
import AuthContext from './components/Store/AuthContext';
import Verify from './components/login/Verify';

function App() {

 const authctx=useContext(AuthContext)

  return (
    <div className="App">
      {!authctx.isLoggedIn&&<LoginNewFrom />}
      <Routes>
        {console.log(authctx.isLoggedIn)}
      
{authctx.isLoggedIn&&<Route path="/"  element={<Home /> }/>}

{authctx.isLoggedIn&&<Route path="/about"  element={<Profile /> }/>}

{authctx.isLoggedIn&&<Route path="/verify"  element={<Verify /> }/>}

      </Routes>
    </div>
  );
}

export default App;
