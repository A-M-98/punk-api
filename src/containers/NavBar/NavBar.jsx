import React from 'react'
import SearchBox from '../../components/SearchBox/SearchBox'

const NavBar = ({getBeerSearch}) => {
  return (
    <div className='navbar'>
      <SearchBox getBeerSearch={getBeerSearch}/>
    </div>
  )
}

export default NavBar