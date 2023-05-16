// import { useState } from "react";
// import AuthContext from "./AuthContext";


// const AuthContextProvider =(props)=>{
//     const [userEmail, setEmail]= useState(localStorage.getItem('email'));


//      const initialToken = localStorage.getItem('token');
//    const [token , setToken] =  useState(initialToken);

//    const userIsLoggedIn = !!token;
//    const LoginHandler =(token ,userEmail)=>{
//            setToken(token)
//            setEmail(userEmail);
//            localStorage.setItem('token',token)
//            localStorage.setItem('email', userEmail);
//    }
//     const logoutHandler =()=>{
//           setToken(null)
//            localStorage.removeItem('token');
//            localStorage.removeItem('email');
//     }
//     console.log(token)
//     const contextValue ={
//         token:token,
//         isLoggedIn:userIsLoggedIn,
//         login:LoginHandler,
//         logout:logoutHandler,
//         email: userEmail,
//     }
   

//     return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
// }

// export default AuthContextProvider;