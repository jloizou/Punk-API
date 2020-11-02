import React from 'react'

const selectsFil = (props) => {
    const selectsFtn = props.selectsFilterFtn
    return (
        <form>
            <input type="radio" name="filterDot" id="1" value="2" onClick={e => selectsFtn(e.target.value)}></input>
            <label for="1">1</label>
            <input type="radio" name="filterDot" id="2"  value="3" onClick={e => selectsFtn(e.target.value)}></input>
            <label for="2">2</label>
            <input type="radio" name="filterDot" id="3"  value="4" onClick={e => selectsFtn(e.target.value)}></input>
            <label for="3">3</label>
        </form>
    )
}

export default selectsFil
