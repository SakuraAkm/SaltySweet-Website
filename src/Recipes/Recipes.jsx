import { useState, useEffect } from "react"
import "./recipes.css"

export default function Recipes({displayRecipes}) {

    if(!displayRecipes.length) return <main id="loading">Loading...</main>
    const [searchBar, setSearchBar] = useState("")
    const [filteredRecipes , setFilteredRecipes] = useState(displayRecipes)
    
    useEffect( () => {
        if(!searchBar){ // if it s empty
            setFilteredRecipes(displayRecipes)
        } else {
            const filteredRecipes = displayRecipes.filter( recipe => {
    
            const recipeName = recipe.props.name.toLowerCase()
            const recipeCuisine = recipe.props.cuisine.toLowerCase()
            const recipeDifficulty = recipe.props.difficulty.toLowerCase()

            if(recipeName.includes(searchBar) || recipeCuisine.includes(searchBar) || recipeDifficulty.includes (searchBar)){
                return true
            }
            })
    
            setFilteredRecipes(filteredRecipes)
        }

    }, [searchBar])

    return (
        <main id="recipes">
            
            <div id="img-parent" className="d-flex justify-content-center align-items-center">
                <div id="img-recipes" className=""></div>
                <h1>RECIPES</h1>
                <div className="recipe-cover"></div>
            </div>
            
            <div id="input-recipes" className="text-center container mx-auto">

                <h1>Search Recipes</h1>
                <div id="input-all">
                    <input 
                        type="text" 
                        name="searc-bar" 
                        id="searc-bar" className=""
                        value={searchBar}
                        onChange={(e) => setSearchBar(e.target.value)} // change
                        placeholder="Search your Favorite Recipes!"/>

                    <div id="search-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/></svg>
                    </div>
                </div>
        
            </div>

            <div id="show-recipes" className="container2 mx-auto">
                {filteredRecipes}
            </div>
            
        </main>
    )
}