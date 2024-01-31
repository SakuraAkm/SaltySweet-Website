import React, {useState, useEffect} from "react"
import Navbar from "./Navbar.jsx"
import Hero from "./Hero.jsx"
import Card from "./Card.jsx"
import MainRecipes from "./MainRecipes.jsx"
import Footer from "./Footer.jsx"

function App() {

  const [recipes, setRecipes] = React.useState([])

  useEffect( () => {
    fetch("https://dummyjson.com/recipes")
    .then(res => res.json())
    .then(data => {
      setRecipes(data.recipes)
    })
  }, [])

  const arrRecipes = Object.values(recipes) // transform recipes in an array of objecet so I can map it
  console.log(arrRecipes)

  const displayRecipes = arrRecipes.map(item => {
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
        
      </main>

      <Footer />
    </>
  )
}

export default App


