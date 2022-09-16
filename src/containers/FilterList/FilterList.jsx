import React from 'react'
import FilterItems from '../../components/FilterItems/FilterItems'
import './FilterList.scss'

const FilterList = ({handleChecked}) => {
  return (
    <div>
      <FilterItems handleChecked={handleChecked}/>
    </div>
  )
}

export default FilterList