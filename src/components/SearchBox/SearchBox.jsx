import React from 'react'
import './SearchBox.scss'

const SearchBox = ({getBeerSearch}) => {
  return (
    <input 
    className='input'
    type="text" 
    onChange={getBeerSearch}
    />
  )
}

export default SearchBox