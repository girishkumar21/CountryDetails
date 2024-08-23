import React from 'react'

const Search = ({setQuery}) => {
    return (
        <div className="search-container">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input onChange={(e)=>{setQuery(e.target.value)}} type="text" placeholder="Search for a country..."/>
        </div>
    )
}

export default Search