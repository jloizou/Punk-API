import React from 'react' 
import styles from "./search.module.scss"

const SearchFil = (props) => {
    const searchFtn = props.searchFilterFtn 

    return (
            <input type="text" className={styles.searchBar} onInput={e => searchFtn(e.target.value)} placeholder="Enter text here"></input>
    )
}

export default SearchFil