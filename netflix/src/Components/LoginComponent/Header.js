
import React, { useEffect } from 'react';
import { LOGO, USER_IMAGE } from '../utils/Constants'; 
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/Store/userSlice';
import { useNavigate } from 'react-router-dom';

const Header = ({ toggleform, showsigninform }) => {
   const user = useSelector((store) => store.user);
   
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

   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
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
    }, []);

   return (
      <div className="absolute px-8 py-2 w-full bg-gradient-to-b from-black z-10 flex justify-between">
         <img src={LOGO} alt="netflix" className="w-44" />
         <div className="flex p-2">
            {user ? (
               <>
                  <div className="flex justify-center items-center flex-row lg:gap-2 gap-0.5 sm:gap-1">
                     <h1 className='  text-2xl font-bold space-x-5 mr-7'>Welcome {user.displayName}</h1>
                     <img className="w-12 h-12" alt="usericon" src={USER_IMAGE} />
                     <button onClick={handleSignOut} className="font-bold text-white">
                        (Sign Out)
                     </button>
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
