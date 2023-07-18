import axios from 'axios';

// create a method of all recipes list using axios
export const getRecipes= async (searchQuery)=>{
    try {
        let response= await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${searchQuery}`)
        return response.data;
    } catch (error) {
        console.log("error while calling api ",error.message)
        return error.response;
    }
}
// create a method for get a particular list of recipe using axios
export const getRecipe= async (searchQuery)=>{
    try {
        let response= await axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${searchQuery}`)
        return response.data;
    } catch (error) {
        console.log("error while calling api ",error.message)
        return error.response;
    }
}