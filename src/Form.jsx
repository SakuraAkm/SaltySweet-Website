import { useState } from "react"

export default function Form(){

    const [formAjax, setFormAjax] = useState(".")
    const[formData, setFormData] = useState({ name: "", email: ""})

    function updateData(event){
        setFormData(prevState => {
            return { 
                ...prevState, 
                [event.target.name]: event.target.value
            }
        })
    }

    function showAjax() {
        event.preventDefault()
        const ajax = document.getElementById("form-ajax")
        ajax.classList.remove("opacity-0")

        if(formData.email.includes("@") && formData.name != "" && formData.email.length > 6){
            setFormAjax("Registration Completed!")
        } else {
            ajax.classList.add("nono")
            setFormAjax("Some field are empty or incorrect")
        }
        setTimeout(() => {
            ajax.classList.remove("nono")
        }, 500)
    }

    return (
        <form action="GET" className="text-center">

                <div className="form container mx-auto">
                    <h1>Subscribe to our Newsletter!</h1>
                    <p>We are not gonna spam you, we will share new updates on the dishes and new recipes to you</p>

                    <div id="info">
                        <input 
                            type="text" 
                            name="name" 
                            id="name"
                            onChange={updateData}
                            value={formData.name}
                            placeholder="Name" 
                        />

                        <input 
                            type="email" 
                            name="email" 
                            id="email"
                            onChange={updateData}
                            value={formData.email}
                            placeholder="E-mail" 
                        />

                        <button type="submit" onClick={showAjax}>Subscibe</button>

                        <div id="form-ajax" className="opacity-0">{formAjax}</div>
                    </div>
                </div>

                <div className="bg-form text-center">
                    
                </div>

                <div className="bg-cover">
                    
                </div>
        </form>
    )
}