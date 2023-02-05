import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Analysis=() => {

  return (
    <>
        <header>
            <Link to="/main" className='Title'>Florafauna<Link to="/" className='month'> Monthly Analysis<Link to="/Form" className='month'> Support</Link></Link></Link>
            <Link to="/"> <button className='logout'>Logout</button></Link>
        </header>
        <div className="report" align="center">
            <h1>
            According to Living Planet Report 2022,The steepest declines occurred in <strong>Latin America and the Caribbean</strong>, where wildlife abundance declined by <strong>94%</strong>, with freshwater fish, reptiles and amphibians being the worst affected.
            </h1>
            <img src='images/Lat.jpg' alt='Latin'/>
            <details>
            <summary>View the decline rate of other Regions</summary>
            <p>North America - 33%</p>
            <p>Asia Pacific - 45%</p>
            <p>Europe and Central Asia - 24%</p>
            <p>Africa - 65%</p>
            </details>
            <h1>[ Next Month Updates : Species having Highest chance of becoming Endangered!! ]</h1>
            
        </div>
    </>
  )
}

export default Analysis