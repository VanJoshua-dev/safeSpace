import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import posterr from './assets/poster.jpeg';
import { FaAnglesUp } from "react-icons/fa6";
import { useEffect, useRef, useState } from 'react';
import './About.css';
import Footer from './Footer.jsx'
function About(props) {
  useEffect(() => {
    // Ensure the icon exists before trying to manipulate it
    const icon = document.querySelector(props.icons);
    const tab = document.querySelector(props.tabs)
    if (icon) {
      icon.style.color = "rgb(62, 65, 103)"; // Change the color of the icon
      tab.style.backgroundColor = "rgb(40, 42, 70)";
    }

    // Cleanup function to reset the color when the component unmounts
    return () => {
      if (icon) {
        icon.style.color = ""; // Reset to default
        tab.style.backgroundColor = "";
      }
    };
  }, [props.icons, props.tabs]);
   const containerRef = useRef(null);
  
    const handleScroll = () => {
      const contentContainer = containerRef.current;
      const goToTopButton = document.getElementById("mybtn");
  
      if (contentContainer.scrollTop > 100) {
        goToTopButton.style.opacity = "1"; // Show "back to top" button
        goToTopButton.style.pointerEvents = "auto"; // Ensure it's clickable
      } else {
        goToTopButton.style.opacity = "0"; // Hide "back to top" button
        goToTopButton.style.pointerEvents = "none"; // Prevent interaction
      }
    };
  
    const scrollToTop = () => {
      const container = containerRef.current;
      const speed = window.innerWidth <= 800 ? 0.3 : 5;
      const scrollStep = () => {
        if (container.scrollTop > 0) {
          container.scrollBy(0, -container.scrollTop / speed);
          requestAnimationFrame(scrollStep);
        }
      };
      requestAnimationFrame(scrollStep);
    };
  
    useEffect(() => {
      const contentContainer = containerRef.current;
      contentContainer.addEventListener("scroll", handleScroll);
  
      return () => {
        contentContainer.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <div className='about-container' ref={containerRef}>
        <Container className='z-50'>
      <Row>
        <Col md={6 } sm={12}>
          <Image src={posterr} className='posterStyle' alt="Poster" fluid/>
        </Col>
        <Col md={6} sm={12}>
          <h1 style={{ color: 'black', fontSize: '4rem', textShadow: '0px 4px 5px rgba(0, 0, 0, 0.5)'  }}>About SafeSpace</h1>
          {/*Pakilagyan nalang ng details */}
          <br/>
          <p style={{paddingRight: '80px'}}>
            A Safe Space System is designed to create environments where individuals feel respected, protected, and free from harassment or discrimination. It aims to foster inclusivity, equality, and mutual respect by setting clear guidelines for behavior, promoting awareness, and ensuring proper channels for addressing concerns. Such systems often integrate education, support mechanisms, and accountability to maintain a culture of safety and well-being for everyone involved.
          </p>
          <p style={{paddingRight: '80px'}}>
            Bawal Bastos Law (Safe Spaces Act).
            The Bawal Bastos Law, officially known as the Safe Spaces Act (Republic Act No. 11313) in the Philippines, aims to prevent and penalize gender-based sexual harassment in public and private spaces. It addresses various forms of harassment, including catcalling, sexist remarks, stalking, and online harassment, regardless of the perpetrator's or victim's gender. The law ensures accountability and promotes the creation of safe, harassment-free spaces for all individuals.
          </p>
        </Col>
      </Row>
      
        </Container>
        <Footer />
         <div
            className="backtotop-wrapper"
            id="mybtn"
            style={{
              position: "fixed",
              bottom: "2rem",
              right: "2rem",
              opacity: "0",
              pointerEvents: "none",
              transition: "opacity 0.3s",
              zIndex: '1'
            }}
            onClick={scrollToTop}
          >
            <button className="spin-reverse"
              style={{
                border: "none",
                background: "transparent",
                width: "4rem",
                height: "4rem",
                borderRadius: "50%",
              }}
            >
              <FaAnglesUp size={24} color="white" />
            </button>
          </div>
    </div>
    
  );
}
export default About;