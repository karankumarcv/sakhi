import "../styles/App.css";

import { RiDropFill } from "react-icons/ri";
import SakhiIcon from "../assets/girl-3.svg";
import CardBg from "../assets/bg.webp";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import Navbar from "../components/Navbar";

function Friends() {
  return (
    <div className="App">
      <section className="App-header">
        {/* Switch */}

        <div className="switchBody">
          <NavLink className="switchItem">Community</NavLink>
          <NavLink className="switchItem active" to={"/friends"}>
            Friends
          </NavLink>
          {/* <NavLink className="switchItem" to={"/me"}>
            Me
          </NavLink> */}
        </div>
      </section>

      {/* Search Bar */}
      <section className="search-section">
        <div className="searchbar">
          <span>
            <FaSearch />
          </span>
          <input
            className="search"
            type="text"
            placeholder="Search Friends"
          ></input>
          <span>
            <FaMicrophone />
          </span>
        </div>
      </section>

      {/* Chats Section */}

      <section className="chats-section">
        <div className="chat-item">
          <div className="chat-item-img">
            <img src={CardBg} alt="#" />
          </div>
          <div className="chat-item-body">
            <div className="chat-item-body-text">
              <div className="chat-item-body-label">Babita</div>
              <div className="chat-item-body-desc">Your Idea Worked !!!</div>
            </div>
            <div className="chat-item-time">01:00 pm</div>
          </div>
        </div>
        <div className="chat-item">
          <div className="chat-item-img">
            <img src={CardBg} alt="#" />
          </div>
          <div className="chat-item-body">
            <div className="chat-item-body-text">
              <div className="chat-item-body-label">Rita</div>
              <div className="chat-item-body-desc">So, is that worked for you ??</div>
            </div>
            <div className="chat-item-time">02:40 pm</div>
          </div>
        </div>
        <div className="chat-item">
          <div className="chat-item-img">
            <img src={CardBg} alt="#" />
          </div>
          <div className="chat-item-body">
            <div className="chat-item-body-text">
              <div className="chat-item-body-label">Ananya</div>
              <div className="chat-item-body-desc">I'm feeling relived now</div>
            </div>
            <div className="chat-item-time">09/02/24</div>
          </div>
        </div>
        <div className="chat-item">
          <div className="chat-item-img">
            <img src={CardBg} alt="#" />
          </div>
          <div className="chat-item-body">
            <div className="chat-item-body-text">
              <div className="chat-item-body-label">Vaishali</div>
              <div className="chat-item-body-desc">Currently, I'm in so much pressue</div>
            </div>
            <div className="chat-item-time">12/03/2019</div>
          </div>
        </div>
        <div className="chat-item">
          <div className="chat-item-img">
            <img src={CardBg} alt="#" />
          </div>
          <div className="chat-item-body">
            <div className="chat-item-body-text">
              <div className="chat-item-body-label">Babita</div>
              <div className="chat-item-body-desc">Your Idea Worked !!!</div>
            </div>
            <div className="chat-item-time">01:00 pm</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Navbar/>
    </div>
  );
}

export default Friends;
