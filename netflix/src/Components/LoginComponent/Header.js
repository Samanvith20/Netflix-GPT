
import React, { useEffect } from 'react';
import { LOGO, USER_IMAGE } from '../utils/Constants'; 
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/Firebase';
import { useDispatch, useSelector,  } from 'react-redux';
import { addUser, removeUser } from '../utils/Store/userSlice';
import { useNavigate } from 'react-router-dom';
import { addToggle } from '../utils/Store/GptSlice';

const Header = ({ toggleform, showsigninform }) => {
   const user = useSelector((store) => store.user);
   const gptview=useSelector((store)=>store?.gpt?.gptSearchView)
   
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleSignOut = () => {
      signOut(auth)
         .then(() => {
            // Successfully signed out
            dispatch(removeUser());
            navigate("/");
         })
         .catch((error) => {
            // Handle sign-out error
            console.error("Sign out error:", error);
         });
   };
   const  searchTogglefunction =()=>{
      dispatch(addToggle())
    }

   useEffect(() => {
      const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
          const { email, password, displayName } = user;
          const uid = user.uid;
          dispatch(
            addUser({
              email: email,
              password: password,
              uid: uid,
              displayName: displayName,
            })
          );
          navigate('/browse');
        } else {
          dispatch(removeUser());
          navigate('/');
        }
      });
       return ()=>unsubscribe()
    }, []);

   return (
      <div className="absolute px-8 py-2 w-full bg-gradient-to-b from-black z-10 flex justify-between">
         <img src={LOGO} alt="netflix" className="w-44" />
         <div className="flex p-2">
            {user ? ( 
               <>
                  <div className="">
          <div className="flex space-x-3" >
          <h2 className="my-5 md:my-7 md:font-semibold text-white mr-4">
               Hello {user.displayName}
            </h2>
            {
               gptview &&(
               <button className='text-white p-2 mx-2 my-2 bg-blue-800 mr-5'onClick={searchTogglefunction}>
               {gptview ? "Homepage" : "GPT Search"}
                 </button>
               )
            }
            <img
              className=" hidden md:block w-12 m-4 rounded-md"
              src={USER_IMAGE}
              alt="userIcon"
            />
            <button
              className="p-2 m-2 md:font-semibold text-white ml-0"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
            
          </div>
        </div>
               </>
            ) : (
               <>
                  <div className="bg-red-700 px-2 py-2 text-lg rounded-md mb-2 mt-1">
                     <button
                        className="text-white text-sm focus:outline-none hover:text-gray-300 transition duration-300"
                        onClick={toggleform}
                     >
                        {showsigninform ? 'Sign Up' : 'Sign In'}
                     </button>
                  </div>
               </>
            )}
         </div>
      </div>
   );
};

export default Header;
