import React, {useState} from "react"
export default function Navbar(){

    const [blackBg, setBlackBg] = useState(false)

    window.addEventListener("scroll", () => {

        if(window.scrollY > 300){
            setBlackBg(true)
        } else{
            setBlackBg(false)
        }
        
    })
    

    const headerStyle = {backgroundColor: blackBg ? "rgb(255, 93, 34)" : "transparent"}


    return (
        <header style={headerStyle}>
            
            <nav className="d-flex align-items-center container mx-auto">
                <a href="#home">
                    <div id="logo" className=" d-flex align-items-center">
                        <img src="https://i.imgur.com/2gL0byY.png" alt="LOGO" />
                        <h1>SaltySweet</h1>
                    </div>
                </a>
                
                
                <ul className="d-flex align-items-center ms-auto">
                    <a href="#home"> <li>HOME</li> </a>
                    <a href=""> <li>RECEPIES</li> </a>
                    <a href=""> <li>ABOUT US</li> </a>
                </ul>

            </nav>
        </header>
    )
}