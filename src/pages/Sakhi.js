import "../styles/App.css";

import { RiDropFill } from "react-icons/ri";
import SakhiIcon from "../assets/girl-3.svg";
import CardBg from "../assets/bg.webp";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import Avatar from "../assets/avatar.webp";
import { MdHistory } from "react-icons/md";
import Navbar from "../components/Navbar";

function Sakhi() {
  return (
    <div className="App">
      {/* Sakhi Avatar */}

      <section className="avatar-section">
        <div className="avatar-body">
          <div className="history-button">
          <MdHistory />
          </div>
          <div className="avatar-img">
            <img src={Avatar} alt="#"></img>
          </div>
        </div>
      </section>

      {/* Chat Section */}

      <section className="chat-section">
        <div className="title">Hey Vidhi, what's on your mind today ?</div>
        <div className="suggestions">
          <div className="suggestion-item">Feeling Bloated</div>
          <div className="suggestion-item">Having Cramps</div>
        </div>
      </section>

      {/* Input Section */}
      <section className="input-section">
        <div className="chat-input">
          <input className="chat-input-bar" placeholder="Ask Sakhi"></input>
          <span><FaMicrophone /></span>
        </div>
      </section>

      {/* Footer */}
      <Navbar/>
    </div>
  );
}

export default Sakhi;
