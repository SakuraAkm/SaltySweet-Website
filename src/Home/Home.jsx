import React from "react"
import Hero from "./Hero.jsx"
import MainRecipes from "./MainRecipes.jsx"
import Form from "./Form.jsx"
import "./home.css"


function Home({displayRecipes}) {

  return (
    <main id="home">
        <Hero />

        <MainRecipes displayRecipes={displayRecipes}/>

        <Form />
    </main>
  )
}

export default Home


