import React from "react";
import { NavLink } from "react-router-dom"; // Use NavLink instead of Link
// Bootstrap components
import { IoHomeSharp } from "react-icons/io5";
import { GoLaw } from "react-icons/go";
import { RiArticleFill } from "react-icons/ri";
import { BiSolidInstitution } from "react-icons/bi";
import { FaPhoneVolume, FaQuestionCircle } from "react-icons/fa";
// CSS
import "./SlideBar.css";

function hover(variable, color) {
  document.querySelector(variable).style.color = color;
}

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="home-navbar">
        {/* Icons */}
        <div className="navbar-icons">
          <IoHomeSharp className="icons homeicon" />
          <GoLaw className="icons lawicon" id="lawicon"/>
          <BiSolidInstitution className="icons docicon" />
          <RiArticleFill className="icons quizicon" />
          <FaPhoneVolume className="icons phoneicon" style={{ fontSize: '6.5px'}}/>
          <FaQuestionCircle className="icons abouticon" />
        </div>

        {/* Items */}
        <div className="navbar-items">
          <ul>
            <li
              className="navbar-item e"
              // onMouseEnter={() => hover(".homeicon", "rgb(40, 42, 70)")}
              // onMouseLeave={() => hover(".homeicon", "white")}
            >
              <NavLink
               className={({ isActive }) =>
                isActive ? "link active homeicon" : "link"
               } id="home"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li
              className="navbar-item"
              // onMouseEnter={() => hover(".lawicon", "rgb(40, 42, 70)")}
              // onMouseLeave={() => hover(".lawicon", "white")}
            >
              <NavLink
                className="link" id="law"
                to="/law_and_penalty"
              >
                Law & Penalty
              </NavLink>
            </li>
            <li
              className="navbar-item"
              // onMouseEnter={() => hover(".docicon", "rgb(40, 42, 70)")}
              // onMouseLeave={() => hover(".docicon", "white")}
            >
              <NavLink
                className="link" id="institution"
                to="/institutions"
              >
                Institutions
              </NavLink>
            </li>
            <li
              className="navbar-item" 
              // onMouseEnter={() => hover(".quizicon", "rgb(40, 42, 70)")}
              // onMouseLeave={() => hover(".quizicon", "white")}
             
            >
              <NavLink
                className="link" id="articles"
                to="/articles"
              >
                Articles
              </NavLink>
            </li>
            <li
              className="navbar-item"
              // onMouseEnter={() => hover(".phoneicon", "rgb(40, 42, 70)")}
              // onMouseLeave={() => hover(".phoneicon", "white")}
              
            >
              <NavLink
                className="link" id="hotlines"
                to="/hotlines"
              >
                Hotlines
              </NavLink>
            </li>
            <li
              className="navbar-item"
              // onMouseEnter={() => hover(".abouticon", "rgb(40, 42, 70)")}
              // onMouseLeave={() => hover(".abouticon", "white")}
            >
              <NavLink
               className="link" id="about"
                to="/about"
              >
                About safeSpace
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
