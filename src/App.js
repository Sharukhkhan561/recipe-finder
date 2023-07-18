import './App.css';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import RecipeDetails from './components/common/RecipeDetails';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/recipes' element={<Recipes/>}/>
    <Route path='/recipes/:recipeId' element={<RecipeDetails/>}/>
    </Routes>
    </Router>
    
  );
}

export default App;
