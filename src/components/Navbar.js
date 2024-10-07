import React from "react";
import { Link } from "react-router-dom";
import "./Styles.css";
import Learn_img from "../images/784035717e2ff1d448c0f6cc4efc89fb.svg";
import Letter_img from "../images/597da4049ec7b1ee932d1b95ca424e0d.svg";
import Leaderboards_img from "../images/ca9178510134b4b0893dbac30b6670aa.svg";
import Quests_img from "../images/7ef36bae3f9d68fc763d3451b5167836.svg";
import Shop_img from "../images/0e58a94dda219766d98c7796b910beee.svg";
import Profile_img from "../images/24e0dcdc06870ead47b3600f0d41eb5b.svg";
import More_img from "../images/7159c0b5d4250a5aea4f396d53f17f0c.svg";
import Duolingo_img from "../images/70a4be81077a8037698067f583816ff9.svg";
import { useDuolingoContext } from "./DuolingoContext";

const Navbar = () => {
  const { set_active_component } = useDuolingoContext();

  return (
    <div className="container position-sticky top-0">
      <div className="container d-sm-none d-md-none  m-3">
        <Link to="/home">
          <div className="nav_links">
            <img
              src={Duolingo_img}
              style={{ height: "30px", width: "128px" }}
              alt="Duolingo logo"
            />
          </div>
        </Link>
      </div>

      <ul className="nav NavForHalfScreen col-12 w-100 flex-sm-row flex-lg-column h-100"
      //  style={{ width: "222px" }}
       >
        <li className="nav-item nav_li" onClick={() => set_active_component(0)}>
            <div className="nav_links">
          <Link className="text-decoration-none" to="/home">
              <img className="navlinks_img" src={Learn_img} alt="Learn" />
              <span className="navlinks_text">Learn</span>
          </Link>
            </div>
        </li>
        <li className="nav-item nav_li" onClick={() => set_active_component(1)}>
          <Link className="text-decoration-none" to="/home">
            <div className="nav_links">
              <img className="navlinks_img" src={Letter_img} alt="Letters" />
              <span className="navlinks_text">Letters</span>
            </div>
          </Link>
        </li>
        <li className="nav-item nav_li" onClick={() => set_active_component(2)}>
          <Link className="text-decoration-none" to="/home">
            <div className="nav_links">
              <img
                className="navlinks_img"
                src={Leaderboards_img}
                alt="Leaderboards"
              />
              <span className="navlinks_text">Leaderboards</span>
            </div>
          </Link>
        </li>
        <li className="nav-item nav_li" onClick={() => set_active_component(3)}>
          <Link className="text-decoration-none" to="/home">
            <div className="nav_links">
              <img className="navlinks_img" src={Quests_img} alt="Quests" />
              <span className="navlinks_text">Quests</span>
            </div>
          </Link>
        </li>
        <li className="nav-item nav_li">
          <Link className="text-decoration-none" to="/home">
            <div className="nav_links">
              <img className="navlinks_img" src={Shop_img} alt="Shop" />
              <span className="navlinks_text">Shop</span>
            </div>
          </Link>
        </li>
        <li className="nav-item nav_li">
          <Link className="text-decoration-none" to="/home">
            <div className="nav_links">
              <img className="navlinks_img" src={Profile_img} alt="Profile" />
              <span className="navlinks_text">Profile</span>
            </div>
          </Link>
        </li>
        <li className="nav-item nav_li">
          <Link className="text-decoration-none" to="/home">
            <div className="nav_links">
              <img className="navlinks_img" src={More_img} alt="More" />
              <span className="navlinks_text">More</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
