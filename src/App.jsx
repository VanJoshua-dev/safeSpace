import React, { useEffect, useRef, useState } from "react";
import SlideBar from "./SlideBar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Articles from "./Articles.jsx";
import Institutions from "./Institutions.jsx";
import LawandPenalty from "./LawandPenalty.jsx";
import Hotline from "./Hotline.jsx";
import "./App.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
//routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from './assets/web-logo.png';



//tabs

function reload() {
  window.location.reload(false);
}

function findArticle() {
  window.alert("No function yet!"); 
}

function App(props) {
   

  return (
    <>
      <div className="main-container">
        <header className="home-header">
          <h1 onClick={reload} className="web-logo">safeSpace</h1>
          <div style={{ width: "50%", height: "2em" }}></div>
          {/* <div className="searchbar">
            <input type="text" placeholder="Search..." />
            <button onClick={findArticle}>
              <FaMagnifyingGlass />
            </button>
          </div> */}
        </header>
        <div className="content-container" id="content-container">
        <Routes>
            <Route path="/safeSpace/" element={<Home icons = '.homeicon' tabs = '#home'/>} />
            <Route path="/law_and_penalty" element={<LawandPenalty icons='lawicon' tabs='#law'/>} />
            <Route path="/institutions" element={<Institutions icons='.docicon' tabs ='#institution'/>} />
            <Route path="/articles" element={<Articles icons='.quizicon' tabs='#articles'/>} />
            <Route path="/about" element={<About icons='.abouticon' tabs='#about'/>} />
            <Route path="/hotlines" element={<Hotline icons='.phoneicon' tabs='#hotlines'/>} />
          </Routes>
        </div>
        <div className="navbar-wrapper">
          <SlideBar />
        </div>

      </div>
    </>
  );
}

export default App;
