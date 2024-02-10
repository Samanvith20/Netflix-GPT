import React from 'react'
import { LOGO } from '../utils/Constants'

const Header = () => {
  return (
    <div className="absolute px-8 py-2 w-full bg-gradient-to-b from-black z-10 flex justify-between">
      <img src={LOGO} alt="netflix" className='w-44'/>
    </div>
  )
}

export default Header
