import React, { useEffect } from 'react'
import { LOGO } from '../utils/Constants'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/Firebase'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/Store/userSlice'
import { useNavigate } from 'react-router-dom'

const Header = () => {
   const user= useSelector((store)=>store.User)
   const dispatch=useDispatch()
     const navigate=useNavigate()
   useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        const { email, password, displayName } = user;
        const uid = user.uid;
         dispatch(addUser( {
          email: email,
          password: password,
          uid: uid,
          displayName: displayName,
         }))
         navigate("/browse")
         
      }
      else{
        dispatch(removeUser())
        navigate("/")
      }
    })
   },[])
  return (
    <div className="absolute px-8 py-2 w-full bg-gradient-to-b from-black z-10 flex justify-between">
      <img src={LOGO} alt="netflix" className='w-44'/>
    </div>
  )
}

export default Header
