import React from "react";
import { Link } from "react-router-dom";
import './style.css'
// import bgimg from "../assets/bgimg.webp";
// import { Button, ButtonGroup } from '@chakra-ui/react'

const Form = () => {
    return(
        <>
            <header>
            <Link to="/main" className='Title'>Florafauna<Link to="/analysis" className='month'> Monthly Analysis</Link></Link>
                <Link to="/"> <button className='logout'>Logout</button></Link>
            </header>
            <div className="form-div" align='center' >
                <h1>Provide Support to Nature Preserves Accross the World</h1>
                {/* <h1>to</h1>
                <h1>Nature Preserves Accross the World</h1> */}
                <img src="images/animal-2615377__480.jpg" alt="help"/>
                <Link to="https://discord.gg/5KEnYSU9"><button >
                    Join us
                </button></Link>
                <Link to="https://donorbox.org/nonprofit-blog/20-global-nonprofits-environment" target="_blank"><button >
                    Sponsor
                </button></Link>
                <Link to="https://impactful.ninja/best-charities-for-planting-trees/" target="_blank"><button >
                    Plant a Tree
                </button></Link>
            </div>
        </>
    )
  
}

export default Form;