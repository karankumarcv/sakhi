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

function Community() {
  return (
    <div className="App">
      <section className="App-header">
        {/* Switch */}

        <div className="switchBody">
          <NavLink className="switchItem active">Community</NavLink>
          <NavLink className="switchItem" to={"/friends"}>Friends</NavLink>
          {/* <NavLink className="switchItem" to={"/me"}>Me</NavLink> */}
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
            placeholder="Search Here"
          ></input>
          <span>
            <FaMicrophone />
          </span>
        </div>
      </section>

      {/* Tips Section */}

      <section className="tips-section">
        <div className="section-label">
          <div className="section-title">Top Tips</div>
          <div className="section-more">See All</div>
        </div>
        <div className="tips-cards">
          <div className="tips-card-item">
            <img src={CardBg} alt="BG" />
            <div class="overlay"></div>
            <div className="tips-card-item-body">
              <div className="tips-card-item-title">
                Child's Pose Is Great For Lower
              </div>
              <div className="tips-card-item-like">
                <FaHeart />
              </div>
            </div>
          </div>
          <div className="tips-card-item">
            <img src={CardBg} alt="BG" />
            <div class="overlay"></div>
            <div className="tips-card-item-body">
              <div className="tips-card-item-title">
                Child's Pose Is Great For Lower
              </div>
              <div className="tips-card-item-like">
                <FaHeart />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Most Searched Section */}
      <section>
        <div className="section-label">
          <div className="section-title">Most Searched</div>
          <div className="section-more">See All</div>
        </div>
        <div className="search-section-body">
          <div className="search-item">
            <div className="search-item-img">
              <img src={CardBg} alt="#" />
            </div>
            <div className="search-item-body">
              <div className="search-item-body-text">
                <div className="search-item-body-label">
                  Essential in heavy flow
                </div>
                <div className="search-item-body-category">Travelling</div>
              </div>
              <div className="search-item-label-open">{">"}</div>
            </div>
          </div>
          <div className="search-item">
            <div className="search-item-img">
              <img src={CardBg} alt="#" />
            </div>
            <div className="search-item-body">
              <div className="search-item-body-text">
                <div className="search-item-body-label">
                  Do's and Dont's While
                </div>
                <div className="search-item-body-category">Daily Life</div>
              </div>
              <div className="search-item-label-open">{">"}</div>
            </div>
          </div>
          <div className="search-item">
            <div className="search-item-img">
              <img src={CardBg} alt="#" />
            </div>
            <div className="search-item-body">
              <div className="search-item-body-text">
                <div className="search-item-body-label">
                  Tips for Irritated Moods
                </div>
                <div className="search-item-body-category">Mood Swings</div>
              </div>
              <div className="search-item-label-open">{">"}</div>
            </div>
          </div>
          <div className="search-item">
            <div className="search-item-img">
              <img src={CardBg} alt="#" />
            </div>
            <div className="search-item-body">
              <div className="search-item-body-text">
                <div className="search-item-body-label">
                  Essential in heavy flow
                </div>
                <div className="search-item-body-category">Travelling</div>
              </div>
              <div className="search-item-label-open">{">"}</div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Navbar></Navbar>
    </div>
  );
}

export default Community;
