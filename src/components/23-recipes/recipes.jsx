import React, { useState } from 'react'
import Banner from './banner'
import SearchResult from './search-result'

const Recipes = () => {

  const [searchText,  setSearchText] = useState("");
  console.log(searchText)

  return (
    <>
        <Banner setSearchText={setSearchText}/>
        <SearchResult searchText={searchText}/>
    </>
  )
}

export default Recipes