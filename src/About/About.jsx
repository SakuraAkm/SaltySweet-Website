import "./about.css"
import "../../style.css"
import aboutData from "./aboutData.jsx"
import AboutCard from "./AboutCard.jsx"

export default function About() {

    const arrData = aboutData.map(person => {
        return ( <AboutCard 
        key = {person.id}
        id = {person.id}
        image = {person.image}
        name = {person.name}
        job = {person.job}
        description = {person.description}
        length = {aboutData.length}
        />
        )
    })
    return (
        <main id="about">
            <h1 id="about-title" className="container mx-auto">
                We are a Team passionate about Cooking 
            </h1>
            <div>
                {arrData}
            </div>
        </main>
    )
}