import React, { useRef } from 'react';

const Verify = () => {
    const  verifyemailInputRef=useRef()


const submitChangeHandler=(event)=>{

const enteredverifyHandler=verifyemailInputRef.current.value;

fetch("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCrucgoKIF2AuihFK5MtNhq7CmGdyFnp5A",{
    method:'POST',
    body:JSON.stringify({
        "X-Firebase-Locale":enteredverifyHandler,
    }),
    headers:{
        'Content-Type': 'application/json'
    },

}).then((res)=>{
    const data= res.json();
    data.then((resp)=>{
        console.log( "get data user",resp);
    
    })
})

}

  return (
    <div>
      <form onSubmit={submitChangeHandler}>
        <input type='number' />
        <button>Verify</button>
      </form>
    </div>
  );
}

export default Verify;
