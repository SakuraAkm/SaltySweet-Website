import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home/Home.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"
import Recipes from "./Recipes/Recipes.jsx"
import About from "./About/About.jsx"
import SingleRecipe from "./Recipes/SingleRecipe.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />

    <Routes>

    <Route path="/" element={ <Home /> } />
    <Route path='/recipes' element={ <Recipes /> }/>
    <Route path='/about' element={ <About /> }/>
    <Route path="/recipes/:id" element={ <SingleRecipe /> } />

    </Routes>

    <Footer />
  </BrowserRouter>,
)
