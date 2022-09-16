import React from 'react'
import './FilterItems.scss'

const FilterItems = ({handleAbv, handleClassic, handleAcidic}) => {
  return (
    <div className='filters'>
        <input type="checkbox" name="filter" id="high-abv" onChange={handleAbv}/> High ABV ({'>'}6.0%)
        <input type="checkbox" name="filter" id="classic-range" onChange={handleClassic}/> Classic Range
        <input type="checkbox" name="filter" id="acidic" onChange={handleAcidic}/> Acidic (PH {'<'} 4)
    </div>
  )
}

export default FilterItems