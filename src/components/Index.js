import React from 'react'

export const Index = () => {
    return (
    <header id="home">

      <nav id="nav-wrap">

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>      
         </ul>

      </nav>


   </header>
    )
}
