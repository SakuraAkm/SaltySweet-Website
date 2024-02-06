import { useParams } from "react-router-dom"

export default function SingleRecipe({recipes}) {
    const param = useParams()
    const currentRecipe = recipes.filter(arr => arr.id == param.id )
    
    let ingredients = currentRecipe[0].ingredients.map(ing => <li key={ing}>{ing}</li>)
    const instructions = currentRecipe[0].instructions.map(inst => <li key={inst}>{inst}</li>)
    

    return (
        <main className="single-recipe">

            <div className="recipe-presentation d-flex align-items-center mx-auto">
                <img src={currentRecipe[0].image} alt="recipe image" />

                <div className="recipe-info text-center">
                    <h1 className="text-center">{currentRecipe[0].name}</h1>

                    <div className="recipe-info2 d-flex justify-content-center">
                        <h3 className="container mx-auto primary-color2">
                            <div>Cuisine:</div>
                            <div>Difficutly:</div>
                            <div>Total Time:</div>
                            <div>Calories:</div>
                            <div>Rating: </div>
                        </h3>

                        <h3 className="container mx-auto">
                            <div>{currentRecipe[0].cuisine}</div>
                            <div>{currentRecipe[0].difficulty}</div>
                            <div>{currentRecipe[0].prepTimeMinutes} minutes</div>
                            <div>{currentRecipe[0].caloriesPerServing} / kcal</div>
                            <div className="d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>
                                {currentRecipe[0].rating} 
                                <div className="grey">({currentRecipe[0].reviewCount})</div>
                            </div>
                        </h3>
                    </div>
                </div>

            </div>

            <hr />

            <div className="ingredients-section">
                <h1 className="text-center">Ingredients</h1>
                <ul className="ingredients">
                    <div>
                        {ingredients}   
                    </div>
                </ul>
            </div>

            <hr />

            <div className="instructions-section">
                <h1 className="text-center">Instructions</h1>
                <ul className="instructions">
                    <div>
                        {instructions}   
                    </div>
                </ul>
            </div>

        </main>
    )
}