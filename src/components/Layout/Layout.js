import  '../Home/Home.css'
import { Link } from 'react-router-dom';
import { authActions } from '../Reducers/auth';
import { useDispatch } from 'react-redux';

const Layout = () => {

  const dispatch=useDispatch()


  const logoutHandler=(event)=>{
    dispatch(authActions.setLogin(false));
    dispatch(authActions.setIdToken(''))
    dispatch(authActions.setUserID(''))
    
  }

  return (
    <div className='layout'>
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
