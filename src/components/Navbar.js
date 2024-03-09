import React, { useRef, useState } from "react";

import { RiDropFill } from "react-icons/ri";
import SakhiIcon from "../assets/girl-3.svg";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Navbar() {

    const [isActive, setIsActive] = useState(false);

    const handleClick=()=>{
        setIsActive(!isActive); // toggle the isActive
    }




  return (
    <section className="nav-section">
      <NavLink className={isActive ? "nav-item active": "nav-item"} to="/" onClick={handleClick}>
        <div className="nav-item-image">
          <RiDropFill />
        </div>
        <div className="nav-item-title">My Periods</div>
      </NavLink>
      <NavLink className={isActive ? "nav-item-active": "nav-item"} to="/sakhi" onClick={handleClick}>
        <div className="nav-item-image">
          <img src={SakhiIcon} alt="Ask Sakhi" />
        </div>
        <div className="nav-item-title">Ask Sakhi</div>
      </NavLink>
      <NavLink className={isActive ? "nav-item-active": "nav-item"} to="/community" onClick={handleClick}>
        <div className="nav-item-image">
          <IoChatbubbleEllipsesSharp />
        </div>
        <div className="nav-item-title">Community</div>
      </NavLink>
    </section>
  );
}

export default Navbar;
