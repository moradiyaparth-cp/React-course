import React, {memo} from 'react'

const Navbar = ({adjective, getAdjective}) => {
    console.log("navbar is render")
  return (
    <div>
        I am a {adjective} Navbar
        <button onClick={() => {getAdjective()}}>{getAdjective()}</button>
    </div>
  )
}

export default memo(Navbar)