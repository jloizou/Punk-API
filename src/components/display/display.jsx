import React from 'react'
import Cards from "../cards"

const BeerDisplay = (props) => {
    return (
        <div>
            <Cards searchFilter={props.searchFilter} selectsFilter={props.selectsFilter}/>
            
        </div>
    )
}

export default BeerDisplay
