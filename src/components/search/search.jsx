import React from 'react'

const SearchFil = (props) => {
    const searchFtn = props.searchFilterFtn 

    
    return (
        <div>
            <input type="text" onInput={e => searchFtn(e.target.value)}></input>
        </div>
    )
}

export default SearchFil