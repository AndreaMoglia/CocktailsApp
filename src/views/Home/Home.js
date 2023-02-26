import React from "react"
import CocktailList from '../../components/CocktailList/CocktailList'
import SearchForm from '../../components/SearchForm/SearchForm'

function Home() {
  return (
    <div >
      <SearchForm />
      <CocktailList />
    </div>
  )
}

export default Home;