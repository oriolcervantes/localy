import React, { useState } from 'react'
import './Search.css'
import searchIcon from '../assets/search.svg'

const Search = (props) => {

  const [search, setSearch] = useState({
    product: ""
  })

  function handleInputChange(e) {
    setSearch({
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.filterShops(search.product);
    setSearch({ product: "" });
  }

  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <input className="searchBar" name="product" onChange={handleInputChange} type="text" value={search.product} placeholder="Find products" />
      <button className="searchBtn" type="submit"><img src={searchIcon} alt="Search" /></button>
    </form>
  )
}

export default Search
