import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home/Home.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"
import Recipes from "./Recipes/Recipes.jsx"
import About from "./About/About.jsx"
import SingleRecipe from "./Recipes/SingleRecipe.jsx"
import Card from "./Card.jsx"

function App() {
  const [recipes, setRecipes] = useState([])

  useEffect( () => {
    fetch("https://dummyjson.com/recipes")
    .then(res => res.json())
    .then(data => setRecipes(data.recipes) )
  }, [])

  const displayRecipes = recipes.map(item => {
    return <Card 
      key = {item.id}
      id = {item.id}
      name = {item.name}
      image = {item.image}
      cuisine = {item.cuisine}
      difficulty = {item.difficulty}
      time = {item.prepTimeMinutes}
      rating = {item.rating}
    />
  })

  console.log(recipes[0])

  return (
    <BrowserRouter>
      <Navbar />

        <Routes>

          <Route path="/" element={ <Home displayRecipes={displayRecipes}/> } />
          <Route path='/recipes' element={ <Recipes displayRecipes={displayRecipes} /> }/>
          <Route path='/about' element={ <About /> }/>
          <Route path="/recipes/:id" element={ <SingleRecipe recipes={recipes}/> } />

        </Routes>

      <Footer />
  </BrowserRouter>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render( <App /> )
