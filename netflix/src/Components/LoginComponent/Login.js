import React, { useState } from 'react';
import { BG_IMAGE,  } from '../utils/Constants';
import Header from './Header';
import Validation from './Formvalidation';
import {useNavigate}from "react-router-dom"
import { handlesignin, handlesignup } from './Handlingfile';
import { useSelector } from 'react-redux';
import { language } from '../utils/languageConstants';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signinform, setSignInform] = useState(true);
  const [name, setName] = useState("");
  const [Message,setErrorMessage]=useState("")
 
   const lang=useSelector((store)=>store?.language?.lang)
  const handleSignInform = () => {
    setSignInform(!signinform);
  };
   const navigate= useNavigate()
   
const handleSubmitform = (e) => {
  e.preventDefault();
  const message = Validation(name, email, password);
  setErrorMessage(message);
  if (message) return;
  if (!signinform) {
      handlesignup(email, password, name, setErrorMessage, navigate);
  } else {
      handlesignin(email, password, navigate, setErrorMessage);
  }
}

  return (
    
    <div className="relative">
      <Header toggleform={handleSignInform} showsigninform={signinform}/>
      <div className="absolute">
        <img src={BG_IMAGE} alt="netflix-bg" className="object-cover w-full h-full" />
      </div>
      <form
        className="absolute w-full md:w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-center text-3xl py-4">
        {signinform ? language[lang].SignIn :language[lang].Signup}</h1>
        {!signinform &&
          <input
            className="my-4 w-full p-4 bg-gray-600"
            type="text"
            placeholder={language[lang].placeholdername}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        }
        <input
          className="my-4 w-full p-4 bg-gray-600"
          type="text"
          placeholder={language[lang].placeholderemail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="my-4 w-full p-4 bg-gray-600"
          type="password"
          placeholder={language[lang].placeholderpassword}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
          <p className="text-red-500 font-bold text-lg py-2">{Message}</p>
        <button className="py-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleSubmitform} type="submit">
          {signinform ? language[lang].SignIn :language[lang].Signup}
        </button>
        <p className="py-4 cursor-pointer text-center" onClick={handleSignInform}>
          {signinform ?  language[lang].NewtoNetflix  : language[lang].alreadyAcc}
        </p>
      </form>
    </div>
  );
};

export default Login;
