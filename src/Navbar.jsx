export default function Navbar(){
    return (
        <header>
            
            <nav className="d-flex align-items-center container mx-auto">
                <a href="#home">
                    <div className="d-flex align-items-center">
                        <img src="src/assets/logo.png" alt="LOGO" />
                        <h1>SaltySweet</h1>
                    </div>
                </a>
                
                
                <ul className="d-flex align-items-center ms-auto">
                    <li>HOME</li>
                    <li>RECEPIES</li>
                    <li>ABOUT US</li>
                </ul>

            </nav>
        </header>
    )
}