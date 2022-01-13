import React, { useState } from 'react'
import './Search.css'
import search from '../assets/search.svg'
import getShops from '../ApiClient'

const Search = () => {

  function handleInputChange(e) {

  }

  function handleSubmit(e) {
    //getShops();
  }

  return (
    <form className="searchForm">
      <input className="searchBar" />
      <button className="searchBtn"><img src={search} alt="Search" /></button>
    </form>
  )
}

export default Search
