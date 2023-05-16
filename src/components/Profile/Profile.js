
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Profile = () => {

  const [name, setName]=useState('');
  const [profileUrl, setUrl]=useState('');

  const nameChange=(e)=>{setName(e.target.value)};
  const urlChange=(e)=>{setUrl(e.target.value)};

  const submitHandler =(event)=>{
    event.preventDefault();

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCrucgoKIF2AuihFK5MtNhq7CmGdyFnp5A',{
      method:'POST',
      body: JSON.stringify({
        idToken:localStorage.getItem("idToken"),
        displayName:name,
        photoUrl:profileUrl,
        returnSecureToken:false
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then((res)=>{
      const data=res.json();

      console.log(data);

      data.then((resp)=>{
          if(resp.error){
              alert(resp.error.message)
          }else{console.log(resp)}
      })
     }).catch((err) => {
      
      alert(err)})
    

  }

  const getDataHandler=()=>{
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCrucgoKIF2AuihFK5MtNhq7CmGdyFnp5A",{
        method: 'POST',
        body:JSON.stringify({
            idToken:localStorage.getItem("idToken"),
        }),
        headers:{'Content-Type': 'application/json'}
    }).then((res)=>{
        const data= res.json();
        data.then((resp)=>{
            console.log( "get data user",resp);
            setName(resp.users[0].displayName);
            setUrl(resp.users[0].photoUrl);
           // history.replace('/')
        })
    })
}
useEffect(()=>getDataHandler(), )
  
  return (
    <>
    <div className="main">
        <div >Winner never Quit</div>
        <div className="right"> Complete Your profile to get high Chance for job</div>
    </div>
    <form className='form1'>
    <div className='form-head'><h3>Contact Detail</h3>
    <Link to="/"><button className='cancel'>X</button></Link>
    </div><br/>
    <div>
        <label htmlFor="name">Full Name: </label>
        <input type="text" value={name} onChange={nameChange}/>
        <label htmlFor="url">Profile Photo url : </label>
        <input type="text" value={profileUrl} onChange={urlChange}/>
    </div><br/>
    <button type="submit" className="button" onClick={submitHandler}> Update </button>
    </form>
    </>
  );
}

export default Profile;