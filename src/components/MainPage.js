import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './style.css';

function MainPage() {
  const name = sessionStorage.getItem('name')
  return (
    <>
      <header>
        <Link to="/" className='Title'>Florafauna</Link>
        <button className='logout'>Logout</button>
      </header>
      <div className='intro'>
        <div className='image'>
          <img src="images/ele.jpg" alt='butterfly' />
          <div className='greet'>Welcome &#128075; {name} </div>
        </div>
      </div>
     
        <div class="container">
          <div class="heading">
              <h1>About Us</h1>
            </div>
          
            <div class="content">
              <p>Florafauna is a non-profit organization that works to protect the planet's biodiversity and ensure a healthy and sustainable future for all life on Earth.</p>
              <p>The website provides information on the importance of biodiversity and the threats facing it, including habitat destruction, climate change, and overexploitation of species. It also highlights the solutions and actions that can be taken to protect biodiversity, such as conserving critical habitats, promoting sustainable use of natural resources, and addressing climate change.</p>
            </div>  
            <div class="heading">
              <h1>Our Concern</h1>
            </div>
          
            <div class="content">
              <p>The loss of biodiversity is a serious concern as it impacts the variety of life on Earth, including the diversity of species, ecosystems, and genetic diversity within species. It has negative consequences such as loss of important ecosystem services, increased vulnerability to disease, decreased resilience to environmental changes, and more. To address the loss of biodiversity, it's important to implement conservation measures, promote sustainability, and raise awareness on the issue.</p>
            </div>
            <div class="heading">
              <h1>What we Provide</h1>
            </div>
          
            <div class="content">
              <p>The website features a range of resources for individuals, organizations, and policymakers, including information on conservation initiatives, research and analysis, and educational materials. Visitors can also take action by supporting conservation projects, advocating for biodiversity-friendly policies, and participating in campaigns to protect threatened species and habitats.</p>
            </div>  
        </div>

        <div className='button'>
          <button className='exp'>Explore</button>
        </div>
      
      
    </>
  )
}

export default MainPage