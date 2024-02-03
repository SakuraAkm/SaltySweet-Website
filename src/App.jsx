import React, {useState, useEffect} from "react"
import Navbar from "./Navbar.jsx"
import Hero from "./Hero.jsx"
import Card from "./Card.jsx"
import MainRecipes from "./MainRecipes.jsx"
import Form from "./Form.jsx"
import Footer from "./Footer.jsx"

function App() {

  const [recipes, setRecipes] = React.useState([])

  useEffect( () => {
    fetch("https://dummyjson.com/recipes")
    .then(res => res.json())
    .then(data => setRecipes(data.recipes) )
  }, [])

  const displayRecipes = recipes.map(item => {
    return <Card 
      key = {item.id}
      name = {item.name}
      image = {item.image}
      cuisine = {item.cuisine}
      difficulty = {item.difficulty}
      time = {item.prepTimeMinutes}
      rating = {item.rating}
    />
  })

  return (
    <>
      <Navbar />

      <main id="home">
        <Hero />

        <MainRecipes displayRecipes={displayRecipes}/>

        <Form />
        
      </main>

      <Footer />
    </>
  )
}

export default App


