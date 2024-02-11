import React, {useState} from "react"
import {Link} from "react-router-dom" 

export default function Navbar(){

    const [blackBg, setBlackBg] = useState(false)
    const [openedMenu, setOpenedMenu] = useState(false)
    const [showList, setShowList] = useState(window.innerWidth > 900 ? true : false)

    window.addEventListener("scroll", () => {
        if(window.scrollY > 50){
            setBlackBg(true)
        } else if(window.scrollY <= 50 && openedMenu){
            setBlackBg(true)
        } else if(window.scrollY <= 50 && !openedMenu){
            setBlackBg(false)
        }
    })

    function openMenu(){
        setOpenedMenu(!openedMenu)
        setShowList(!showList)
        if(window.scrollY < 50){
            if(openedMenu){
                setBlackBg(false)
            } else {
                setBlackBg(true)
            } 
        } else {
            setBlackBg(true)
        } 
    }

    // window resize behaviour for the navbar
    window.addEventListener("resize", () => {
        if(window.innerWidth > 900){
            setOpenedMenu(false)
            setShowList(true)
        } else {
            setOpenedMenu(false)
            setShowList(false)
        }
    })

    // Move to the top everytime I click an <a>
    const links = document.querySelectorAll("a")
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            window.scrollTo({top: 0, scroll: "smooth"})
        })
    })

    const listStyle = {
        display : showList ? "block" : "none"
    }
    const headerStyle = {
        backgroundColor: blackBg ? "rgb(255, 93, 34)" : "transparent",
        height: openedMenu ? "15rem" : "5rem",
        transition: "0.3s"
    }
    const navStyle = {height: "5rem"}

    return (
        <header style={headerStyle}>
            
            <nav className="container mx-auto">
                <div style={navStyle} id="first-nav-row" className="d-flex align-items-center">
                    
                    <Link to="/">
                        <div id="logo" className=" d-flex align-items-center">
                            <img src="https://i.imgur.com/CYDsWl8.png" alt="LOGO" />
                            <h1>SaltySweet</h1>
                        </div>
                    </Link>
                    
                    <svg onClick={openMenu} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </div>
                
                <ul style={listStyle} className="align-items-center">

                    <li style={listStyle}>
                        <Link to="/">HOME</Link>
                    </li> 
                    
                    <li style={listStyle}>
                        <Link to="/recipes">RECEPIES</Link>
                    </li> 
                    
                    <li style={listStyle}>
                        <Link to="/about">ABOUT US</Link>
                    </li> 
                </ul>

            </nav>
        </header>
    )
}