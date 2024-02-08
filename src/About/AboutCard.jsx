export default function AboutCard({name, image, job, description, id , length}) {

    if(id % 2 == 0){
        return (
            <>
                <div className="about-card">
                    <div className="about-container about-container1 container mx-auto text-center">
    
                            <div className="about-info info1">
                                <h1>{name}</h1>
                                <h5>{job}</h5>
                                <p>{description}</p>
                            </div>

                            <img src={image} alt="person image" />
                        
    
                    </div>
                </div>
                { id != length && <hr /> }
            </>
        )
    } else {
        return (
            <>
                <div className="about-card">
                    <div className="about-container about-container2 container mx-auto text-center">
    
                        <img src={image} alt="person image" />
                        
                        <div className="about-info info2">
                            <h1>{name}</h1>
                            <h5>{job}</h5>
                            <p>{description}</p>
                        </div>
    
                    </div>
                </div>
                { id != length && <hr /> }
            </>
        )
    }
    
}