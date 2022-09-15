import React from 'react'
import './NavBar.scss'
import SearchBox from '../../components/SearchBox/SearchBox'
import logo from '../../assets/images/brewdog-logo.png'

const NavBar = ({getBeerSearch}) => {
  return (
    <div className='navbar'>
      <img className='navbar__image' src={logo} alt="BREWDOG" />
      <SearchBox getBeerSearch={getBeerSearch}/>
      <h4>FILTER</h4>
    </div>
  )
}

export default NavBar