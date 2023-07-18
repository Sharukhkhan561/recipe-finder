import React,{useEffect, useState} from 'react'
import Search from "../components/common/Search";
import RecipeList from "../components/common/RecipeList"
import { getRecipes } from '../services/Api';
const Recipes = () => {
  const [searchQuery, setSearchQuery]=useState("pizza")
  const [recipes, setRecipes]=useState([])
  

  useEffect(()=>{
    getSearchResult()
  },[searchQuery])
  
  // for getRecipes list using API call with axios using getRecipes function
  const getSearchResult=async()=>{
     let result = await getRecipes(searchQuery);
     if(result &&result.recipes){
      setRecipes(result.recipes)
     }
  }
  return (
    <>
      <Search setSearchQuery={setSearchQuery}/>
      <RecipeList recipes={recipes} searchQuery={searchQuery}
      />
    </>
  )
}

export default Recipes