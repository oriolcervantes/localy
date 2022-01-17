import React, { useState } from 'react'
import './Search.css'

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
      <div className="bar">
        <input className="searchBar" name="product" onChange={handleInputChange} type="text" value={search.product} placeholder="Find shops by product" />
        <button className="searchBtn" type="submit"><img src={require("../assets/search.png")} alt="Search" /></button>
      </div>
    </form>
  )
}

export default Search
