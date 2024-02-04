import {Link} from "react-router-dom"

export default function MainRecipes(props){
    return (
        <section id="adviced-recipes">
                <h1 id="presentation" className="text-center container mx-auto">SaltySweet is a place where everyone can learn to cook, no matter if you are an expert or an amatour, this place is right for you</h1>
                <h2 className="text-center">Recipes Advices by Us!</h2>
                
                <div id="show-recipes" className="mx-auto">
                    {props.displayRecipes.slice(0, 6)}
                </div>

                <div className="d-flex justify-content-center">
                    <button className=""><Link to="/recipes">Show More</Link></button>
                </div>
                
        </section>
    )
}