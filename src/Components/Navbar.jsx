import React from 'react'
import logo from '../images/react-icon-small.png'
function Navbar() {
  return(
    <nav className='navbar'>
      <img src={logo} alt="react-logo" />
      <h3>ReactFacts</h3> 
      <h4>React Course - Project 1</h4>
    </nav>
  )
}

export default Navbar