import { useState } from "react"

export default function Form(){
    const[formData, setFormData] = useState({})
    const [formAjax, setFormAjax] = useState(".")

    function showAjax() {
        event.preventDefault()
        // function to set ajax to thank you / error
    }

    return (
        <form action="GET" >
            <div className="text-center container mx-auto">
                <h1>Subscribe to our Newsletter!</h1>
                <p>We are not gonna spam you, we will share new updates on the dishes and new recipes to you</p>

                <div id="info">
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Name" 
                    />

                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="E-mail" 
                    />

                    <button type="submit" onClick={showAjax}>Subscibe</button>

                    <div id="form-ajax">{formAjax}</div>
                </div>
            </div>
        </form>
    )
}