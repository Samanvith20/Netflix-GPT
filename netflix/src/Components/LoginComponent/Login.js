import React, { useState } from 'react';
import { BG_URL } from '../utils/Constants';
import Header from './Header';
import Validation from './Formvalidation';
import {useNavigate}from "react-router-dom"
import { handlesignin, handlesignup } from './Handlingfile';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signinform, setSignInform] = useState(true);
  const [name, setName] = useState("");
  const [Message,setErrorMessage]=useState("")
  //console.log(Message);

  const handleSignInform = () => {
    setSignInform(!signinform);
  };
   const navigate= useNavigate()
   const handleSubmitform=(e)=>{
    e.preventDefault()
   const message=Validation(name,email,password)
   setErrorMessage(message)
  if(message) return
      if(!signinform){
        handlesignup(email,password,name,setErrorMessage,navigate)

      } else{
        handlesignin(email,password,setErrorMessage,navigate)
      }
 
   }
  return (
    
    <div className="relative">
      <Header/>
      <div className="absolute">
        <img src={BG_URL} alt="netflix-bg" className="object-cover w-full h-full" />
      </div>
      <form
        className="absolute w-full md:w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-center text-3xl py-4">{signinform ? 'Sign In' : 'Sign Up'}</h1>
        {!signinform &&
          <input
            className="my-4 w-full p-4 bg-gray-600"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        }
        <input
          className="my-4 w-full p-4 bg-gray-600"
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="my-4 w-full p-4 bg-gray-600"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
          <p className="text-red-500 font-bold text-lg py-2">{Message}</p>
        <button className="py-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleSubmitform} type="submit">
          {signinform ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer text-center" onClick={handleSignInform}>
          {signinform ? 'New to Netflix? Sign Up Now' : 'Already registered? Sign In Now.'}
        </p>
      </form>
    </div>
  );
};

export default Login;
