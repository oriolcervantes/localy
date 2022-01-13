import React from 'react'
import './Search.css'
import search from '../assets/search.svg'

const Search = () => {
  return (
    <form className="searchForm">
      <input className="searchBar" />
      <button className="searchBtn"><img src={search} alt="Search" /></button>
    </form>
  )
}

export default Search
