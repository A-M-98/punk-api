import React from 'react'
import './FilterItems.scss'

const FilterItems = ({handleChecked}) => {
  return (
    <div className='filters'>
        <input type="checkbox" name="filter" id="high-abv" onChange={handleChecked}/> High ABV ({'>'}6.0%)
        <input type="checkbox" name="filter" id="classic-range" onChange={handleChecked}/> Classic Range
        <input type="checkbox" name="filter" id="acidic" onChange={handleChecked}/> Acidic (PH {'<'} 4)
    </div>
  )
}

export default FilterItems