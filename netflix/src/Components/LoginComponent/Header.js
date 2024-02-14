import React, { useEffect } from 'react';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/Constants'; 
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/Store/userSlice';
import { useNavigate } from 'react-router-dom';
import { addToggle } from '../utils/Store/GptSlice';
import { changeLanguage } from '../utils/Store/langSlice';
import { language } from '../utils/languageConstants';

const Header = ({ toggleform, showsigninform }) => {
  const user = useSelector((store) => store.user);
  const gptview = useSelector((store) => store?.gpt?.gptSearchView);
  const lang=useSelector((store)=>store?.language?.lang)
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

  const handleGptSearchClick = () => {
    dispatch(addToggle());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute px-8 py-2 w-full bg-gradient-to-b from-black z-10 flex justify-between">
      <img src={LOGO} alt="netflix" className="w-44" />
      <div className="flex p-2">
        {user ? ( 
          <div className="">
            <div className="flex p-2 justify-between" >
              <h2 className="my-5 md:my-7 md:font-semibold text-white mr-4 space-x-1">
                {language[lang].welcome }   {user.displayName}
              </h2>
              <div className="flex p-2 justify-between">
                
                  <select
                    className="p-2 m-2 bg-blue-900 text-white"
                    onChange={handleLanguageChange}
                  >
                    {SUPPORTED_LANGUAGES.map((lang) => (
                      <option key={lang.identifier} value={lang.identifier}>
                        {lang.name}
                      </option>
                    ))}
                  </select>
                
                  {gptview && (
                <button
                  className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
                  onClick={handleGptSearchClick}
                >
                  {gptview ? language[lang].homepage : language[lang].gptsearch}
                  </button>
                  )}
          </div>
              <button
                className="py-2 px-4 mx-4 my-2 bg-red-800 text-white rounded-lg"
                onClick={handleSignOut}
              >
                {language[lang].Signout}
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-3 space-x-4">
            <select
              className="p-2 m-2 bg-blue-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
            <button
              className="text-white  focus:outline-none hover:text-gray-300 transition duration-300 bg-red-900 p-2 m-2 rounded-lg text-lg"
              onClick={toggleform}
            >
              {showsigninform? language[lang].SignIn :language[lang].Signup}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
