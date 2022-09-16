import React from 'react'
import './NavBar.scss'
import SearchBox from '../../components/SearchBox/SearchBox'
import logo from '../../assets/images/brewdog-logo.png'
import FilterList from '../FilterList/FilterList'

const NavBar = ({getBeerSearch, handleAbv, handleClassic, handleAcidic}) => {
  return (
    <div className='navbar'>
      <img className='navbar__image' src={logo} alt="BREWDOG" />
      <SearchBox getBeerSearch={getBeerSearch}/>
      <div className='filters-container'>
      <FilterList handleAbv={handleAbv} handleClassic={handleClassic} handleAcidic={handleAcidic}/>
      </div>
    </div>
  )
}

export default NavBar