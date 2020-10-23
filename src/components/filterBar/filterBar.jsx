import React from 'react'
import SearchFil from "../search"
import SelectsFil from "../selects"

const FilterBar = (props) => {
    

    return (
        <div>
            <SearchFil searchFilterFtn={props.searchFilterFtn}/>
            <SelectsFil selectsFilterFtn={props.selectsFilterFtn}/>
            
        </div>
    )
}

export default FilterBar
