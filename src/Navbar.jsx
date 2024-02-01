import React, {useState} from "react"
export default function Navbar(){

    const [blackBg, setBlackBg] = useState(false)
    const [openedMenu, setOpenedMenu] = useState(false)

    function openMenu(){
        return setOpenedMenu(!openedMenu)
    }

    window.addEventListener("scroll", () => {

        if(window.scrollY > 100){
            setBlackBg(true)
        } else{
            setBlackBg(false)
        }
        
    })

    window.addEventListener("resize", (ShowStyle) => {
        if(window.innerWidth > 900){
            setOpenedMenu(false)
        }
    })

    let ShowStyle = {
        display: openedMenu ? "block" : "none",
    }
    const headerStyle = {
        backgroundColor: blackBg ? "rgb(255, 93, 34)" : "transparent",
        height: openedMenu ? "15rem" : "5rem"
    }
    const navStyle = {height: "5rem"}

    return (
        <header style={headerStyle}>
            
            <nav className="container mx-auto">
                <div style={navStyle} id="first-nav-row" className="d-flex align-items-center">
                    <a href="#home">
                        <div id="logo" className=" d-flex align-items-center">
                            <img src="https://i.imgur.com/2gL0byY.png" alt="LOGO" />
                            <h1>SaltySweet</h1>
                        </div>
                    </a>
                    
                    <svg onClick={openMenu} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </div>
                
                <ul style={ShowStyle} className="d-flex align-items-center">
                    <a  style={ShowStyle} href="#home"> <li style={ShowStyle}>HOME</li> </a>
                    <a  style={ShowStyle} href=""> <li style={ShowStyle}>RECEPIES</li> </a>
                    <a  style={ShowStyle} href=""> <li style={ShowStyle}>ABOUT US</li> </a>
                </ul>

            </nav>
        </header>
    )
}