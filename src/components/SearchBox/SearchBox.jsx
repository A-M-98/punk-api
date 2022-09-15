import React from 'react'
import './SearchBox.scss'

const SearchBox = ({getBeerSearch}) => {
  return (
    <input 
    className='input'
    type="text" 
    onInput={getBeerSearch}
    />
  )
}

export default SearchBox