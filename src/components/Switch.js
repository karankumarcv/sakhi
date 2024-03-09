import React, {useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Switch({ item1, item2 }) {


    const location = useLocation();

  
  const navRef=useRef();

  const showNavbar = (event) =>{

    const liElements = navRef.current.querySelectorAll('.switchItem');

    // Remove active class from all list items
    liElements.forEach((li) => {
      li.classList.remove('active');
    });


    const liElement = event.target;
    liElement.classList.toggle('active');
  }

  return (
    <section className="switch-section">
      <div className="switchBody" ref={navRef}>
        <NavLink  className={`switchItem ${location.pathname === item1 ? 'active' : ''}`} onClick={showNavbar} to={`/${item1}`}>{item1}</NavLink>
        <NavLink className="switchItem" onClick={showNavbar} to={`/${item2}`}>{item2}</NavLink>
      </div>
    </section>
  );
}

export default Switch;
