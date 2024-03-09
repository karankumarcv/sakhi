import "../styles/App.css";
import { FiDroplet } from "react-icons/fi";
import { LuTornado } from "react-icons/lu";
import { TbTopologyStar } from "react-icons/tb";
import Navbar from "../components/Navbar";
function Home() {
  return (
    <div className="App">
      <section className="App-header">
        {/* Switch */}

        <div className="switchBody">
          <div className="switchItem active">Track</div>
          <div className="switchItem">Analyse</div>
        </div>
      </section>

      {/* Period Dealy View */}
      <section className="delay-body">
        <div className="delay-number">18</div>
        <div className="delay-statement">days to your next period</div>
      </section>

      {/* cal View */}
      <section className="cal">
        <div className="cal-controllers">
          <div className="month-name">
            February <span className="down-arrow">{">"}</span>
          </div>
          <div className="slide-control">
            <div className="left-slide">{"<"}</div>
            <div className="right-slide">{">"}</div>
          </div>
        </div>
        <div className="cal-days">
          <div className="cal-days-item">SUN</div>
          <div className="cal-days-item">MON</div>
          <div className="cal-days-item">TUE</div>
          <div className="cal-days-item">WED</div>
          <div className="cal-days-item">THU</div>
          <div className="cal-days-item">FRI</div>
          <div className="cal-days-item">SAT</div>
        </div>
        <div className="cal-dates">
          <div className="cal-dates-item"></div>
          <div className="cal-dates-item"></div>
          <div className="cal-dates-item"></div>
          <div className="cal-dates-item"></div>
          <div className="cal-dates-item">01</div>
          <div className="cal-dates-item">02</div>
          <div className="cal-dates-item">03</div>
          <div className="cal-dates-item">04</div>
          <div className="cal-dates-item">05</div>
          <div className="cal-dates-item">06</div>
          <div className="cal-dates-item">07</div>
          <div className="cal-dates-item">08</div>
          <div className="cal-dates-item">09</div>
          <div className="cal-dates-item">10</div>
          <div className="cal-dates-item">11</div>
          <div className="cal-dates-item">12</div>
          <div className="cal-dates-item">13</div>
          <div className="cal-dates-item">14</div>
          <div className="cal-dates-item">15</div>
          <div className="cal-dates-item">16</div>
          <div className="cal-dates-item">17</div>
          <div className="cal-dates-item">18</div>
          <div className="cal-dates-item">19</div>
          <div className="cal-dates-item">20</div>
          <div className="cal-dates-item">21</div>
          <div className="cal-dates-item">22</div>
          <div className="cal-dates-item">23</div>
          <div className="cal-dates-item">24</div>
          <div className="cal-dates-item">25</div>
          <div className="cal-dates-item">26</div>
          <div className="cal-dates-item">27</div>
          <div className="cal-dates-item">28</div>
          <div className="cal-dates-item">29</div>
        </div>
      </section>
      {/* Data Inputs Buttons */}

      <section className="data-input-body">
        <div className="data-input-item-body">
          <div className="data-input-button-image">
            <span>
              <FiDroplet />
            </span>
            <span className="data-input-button-image-add">+</span>
          </div>
          <div className="data-input-button-title">Flow</div>
        </div>
        <div className="data-input-item-body">
          <div className="data-input-button-image">
            <span>
              <LuTornado />
            </span>
            <span className="data-input-button-image-add">+</span>
          </div>
          <div className="data-input-button-title">Feel</div>
        </div>
        <div className="data-input-item-body">
          <div className="data-input-button-image">
            <span>
              <TbTopologyStar />
            </span>
            <span className="data-input-button-image-add">+</span>
          </div>
          <div className="data-input-button-title">Pain</div>
        </div>
      </section>
      <Navbar/>
    </div>
  );
}

export default Home;
