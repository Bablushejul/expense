
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../Store/AuthContext';

const Layout = () => {
const authctx=useContext(AuthContext)

  const logoutHandler=(event)=>{
authctx.logout()
    
  }

  return (
    <div>
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
       
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/verify">verify Email</Link>
        </li>
        <li>
          <button onClick={logoutHandler}>Logout</button>
        </li>
        
      </ul>
    </div>
  );
}

export default Layout;
