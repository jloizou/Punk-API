import React from 'react'
import SearchFil from "../search"
import SelectsFil from "../selects"

const FilterBar = (props) => {
    

    return (
        <>
            <SearchFil searchFilterFtn={props.searchFilterFtn}/>
            <SelectsFil selectsFilterFtn={props.selectsFilterFtn}/>
            
        </>
    )
}

export default FilterBar
