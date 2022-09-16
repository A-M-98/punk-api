import React from 'react'
import FilterItems from '../../components/FilterItems/FilterItems'
import './FilterList.scss'

const FilterList = ({handleAbv, handleClassic, handleAcidic}) => {
  return (
    <div>
      <FilterItems handleAbv={handleAbv} handleClassic={handleClassic} handleAcidic={handleAcidic}/>
    </div>
  )
}

export default FilterList