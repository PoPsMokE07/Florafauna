import React from "react";
import { Link } from "react-router-dom";
// import bgimg from "../assets/bgimg.webp";
// import { Button, ButtonGroup } from '@chakra-ui/react'

const Form = () => {
    return(
        <>
            <div className="form-div" align='center' >
                <h1>Provide Support</h1>
                <h1>to</h1>
                <h1>Nature Preserves Accross the World</h1>
                <img src="images/animal-2615377__480.jpg" alt="help"/>
                <Link to="www.dicord.com"><button >
                    Join us
                </button></Link>
                <Link to="https://donorbox.org/nonprofit-blog/20-global-nonprofits-environment"><button >
                    Sponsor
                </button></Link>
                <Link to="www.dicord.com"><button >
                    Share
                </button></Link>
            </div>
        </>
    )
  
}

export default Form;