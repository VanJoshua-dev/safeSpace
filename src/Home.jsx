import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { FaAnglesUp } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';
// Pictures
import pic1 from "./assets/pic1.jpeg";
import pic2 from "./assets/pic2.jpeg";
import pic3 from "./assets/pic3.jpeg";
import pic4 from "./assets/Smart-Slider-iacat-scaled.jpeg";
import pic5 from "./assets/wpla-homepage-banner.jpeg";
import pic6 from "./assets/pic6.jpeg";
//bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import "./Home.css";

function Home(props) {


  useEffect(() => {
    // Ensure the icon exists before trying to manipulate it
    const icon = document.querySelector(props.icons);
    const tab = document.querySelector(props.tabs);
    console.log(props.tabs);
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
  const speed = window.innerWidth <= 800 ? 0.3 : 5; // Faster scrolling on mobile
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
    <>
      <div
        className="maincontent-container"
        ref={containerRef}
        style={{ overflowY: "auto", height: "100vh" }}
      >
        {/* Carousel Section */}
        <div className="carousel-wrapper">
          <Carousel fade pause="false" >
            <Carousel.Item style={{transition: 'all 1s ease-in-out'}}>
              <img src={pic1} alt="" className="d-block w-100 rounded" />
            </Carousel.Item>
            <Carousel.Item style={{transition: 'all 1s ease-in-out'}}>
              <img src={pic2} alt="" className="d-block w-100 rounded" />
            </Carousel.Item >
            <Carousel.Item style={{transition: 'all 1s ease-in-out'}}>
              <img src={pic3} alt="" className="d-block w-100 rounded" />
            </Carousel.Item>
            <Carousel.Item style={{transition: 'all 1s ease-in-out'}}>
              <img src={pic4} alt="" className="d-block w-100 rounded" />
            </Carousel.Item>
            <Carousel.Item style={{transition: 'all 1s ease-in-out'}}>
              <img src={pic5} alt="" className="d-block w-100 rounded" />
            </Carousel.Item>
            <Carousel.Item style={{transition: 'all 1s ease-in-out'}}>
              <img src={pic6} alt="" className="d-block w-100 rounded" />
            </Carousel.Item>
          </Carousel>
        </div>

        {/* Content Section */}
        {/*sa content section na 'to naka auto yung height, customize nyo nalang yung fonts at colors* */}
        {/** wag nyo din problemahin yung footer kasi kapag nagkarron na ng laman yung contents kusa lang yang baba :> */}
        <div className="content-wrapper">
          <div className="contents-container d-flex flex-column">
            <div className="overview-wrapper w-100">
                <Container className="overview">
                  <Row className="overview-row">
                    <Col md={20} className="overview-col">
                        <h2>Overview</h2>
                        <p className="text-justify">Bawal Bastos Law, also known as the <b>Republic Act No. 11313</b>, is a law in the Philippines where it's goal is to provide protection to individuals from gender-based sexual harassment in public. It includes workplaces, schools and universities, public places, and even online platforms. There are various harassments but the most common are; catcalling, wolf-whistling, and derogatory remarks or comments about a person or group. The act also outlines the penalties for those who'd violate this law, making sure that violators would get the punishment that they deserve, this helps to secure the personal space and dignity of all individuals.  
                          </p>
                          <p className="text-justify">

                          This website has sections that showcases information about the law, violations and its penalties, different articles about the law, and hotlines for those who seek help that are experiencing or experienced harassment/s.
                          By providing comprehensive and accessible information, our website aims to create safer spaces for everyone. We encourage you to explore the various sections and utilize the resources available to empower and protect yourself and others.
                          </p>
                        <h2></h2>
                    </Col>
                  </Row>
                </Container>
            </div>
            {/* <div className="info-wrapper">
              <Container className="information">
                <Row className="info-row">
                  <Col md={30} className="info-col">
                    <h2>Info 1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </Col>
                 
                </Row>
              </Container>
            </div> */}
            <br />
            <br />
            <br />
            {/* <div className="posters-wrapper w-100">
            <Container className="poster">
                <Row className="poster-row">
                  <Col md={30} className="poster-col">
                    <h2>Articles about Bawal Bastos Law</h2>
                    <br />
                   <div className="articles-container">
                      <Container className="gap-2">
                        <Row className="gap-4">
                          <Col className="Article1 w-5 border border1 boder-dark d-flex flex-column justify-content-center p-2 rounded">
                              <h6>Safe Spaces Act or Bawal Bastos Law: A Comprehensive Guide</h6>
                              <p>An in-depth explainer of the Safe Spaces Act, detailing its provisions and implications.</p>
                              <p className="text-decoration-underline">Publisher: Top Gear Philippines</p>
                              <div className="btn-1 w-100 d-flex justify-content-center align-items-center">
                                <a 
                                href="https://www.topgear.com.ph/features/feature-articles/bawal-bastos-law-explainer-a4682-20231115-lfrm?" 
                                className="article-1 text-decoration-none h-5 bg-primary text-white p-2 rounded"
                               
                                
                                >Click to view</a>
                              </div>
                               
                          </Col>
                          <Col className="Article2 w-5 border border1 boder-dark d-flex flex-column justify-content-center p-2 rounded">
                              <h6>Perceptions of Filipino Adults on the Safe Spaces Act</h6>
                              <p>A study exploring how Filipino adults perceive the Safe Spaces Act and its impact on society.</p>
                              <p className="text-decoration-underline">Publisher: De La Salle University</p>
                              <div className="btn-3 w-100 d-flex justify-content-center align-items-center">
                                <a 
                                href="https://www.dlsu.edu.ph/wp-content/uploads/pdf/conferences/research-congress-proceedings/2021/WCFE-02.pdf?" 
                                className="article-1 text-decoration-none h-5 bg-primary text-white p-2 rounded"
                                
                                >Click to view</a>
                              </div>
                          </Col>
                          <Col className="Article3 w-5 border border1 boder-dark d-flex flex-column justify-content-center p-2 rounded">
                            <h6>A Look into the Salient Provisions of Republic Act No. 11313</h6>
                              <p>An analysis of the key aspects of the Safe Spaces Act and its Implementing Rules and Regulations.</p>
                              <p className="text-decoration-underline">Publisher: The Firm Va</p>
                              <div className="btn-3 w-100 d-flex justify-content-center align-items-center">
                                <a 
                                href="https://www.thefirmva.com/updates.do?id=26422&" 
                                className="article-3 text-decoration-none h-5 bg-primary text-white p-2 rounded"
                                
                                >Click to view</a>
                              </div>
                          </Col>
                        </Row>
                        <br />
                        <Row className="gap-4">
                        <Col className="Article4 w-5 border border1 boder-dark d-flex flex-column justify-content-center p-2 rounded">
                            <h6>Implementing Rules and Regulations ng Bawal Bastos Law nilagdaan na!</h6>
                              <p>An overview of the specific acts penalized under the Safe Spaces Act.</p>
                              <p className="text-decoration-underline">Publisher: Philstar</p>
                              <div className="btn-4 w-100 d-flex justify-content-center align-items-center">
                                <a 
                                href="https://www.philstar.com/search/bawal%20bastos%20law" 
                                className="article-4 text-decoration-none h-5 bg-primary text-white p-2 rounded"
                                
                                >Click to view</a>
                              </div>
                          </Col>
                          <Col className="Article5 w-5 border border1 boder-dark d-flex flex-column justify-content-center p-2 rounded">
                            <h6>Republic Act No. 11313 - LawPhil</h6>
                              <p>The full text of the Safe Spaces Act as published on LawPhil.</p>
                              <p className="text-decoration-underline">Publisher: LawPhil</p>
                              <div className="btn-5 w-100 d-flex justify-content-center align-items-center">
                                <a 
                                href="https://lawphil.net/statutes/repacts/ra2019/ra_11313_2019.html?" 
                                className="article-5 text-decoration-none h-5 bg-primary text-white p-2 rounded"
                                
                                >Click to view</a>
                              </div>
                          </Col>
                          <Col className="Article5 w-5 border border1 boder-dark d-flex flex-column justify-content-center p-2 rounded">
                            <h6>FAQs Republic Act No. 11313: Safe Spaces Act (Bawal Bastos Law)</h6>
                              <p>Frequently asked questions about the Safe Spaces Act, provided by the Philippine Commission on Women.</p>
                              <p className="text-decoration-underline">Publisher: Philipine Coast Guard</p>
                              <div className="btn-5 w-100 d-flex justify-content-center align-items-center">
                                <a 
                                href="https://pcw.gov.ph/faq-republic-act-no-11313/?" 
                                className="article-5 text-decoration-none h-5 bg-primary text-white p-2 rounded"
                                
                                >Click to view</a>
                              </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <NavLink  to="/articles">View more articles</NavLink>
                          </Col>
                        </Row>
                      </Container>
                   </div>
                  </Col>
                 
                </Row>
              </Container>
            </div> */}
          </div>
          {/*footer
          
          
           * palagyan nalang ng footer kung ano man yung sa tingin nyong dapat ilagay :>
          * */}
          <div className="footer-container">
            <footer className="home-footer">
            <Container >
          <Row style={{ width: '100%'}}>
            <Col md={3} style={{ width: '380px'}}>
              <h5 className="text-start">About safeSpace</h5>
              <p className='text-start'>SafeSpace PH is a platform promoting awareness about the Safe Spaces Act (RA 11313).</p>
              <h5 className="text-start">Our Mission</h5>
              <p className='text-start'>Our mission is to provide resources and support to help create safer spaces for everyone.</p>
            </Col>
            <Col className='text-center'>
              <h5>
                Contact Information
              </h5>
              <div >
                <p className='text-center'>Email:  <a href="mailto:safeSpace@safeSpace.ph">safeSpace@safeSpace.ph</a></p>
              </div>
              <h5>Socials</h5>
              <div className='socials'>
                <a href="http://facebook.com"><FaFacebookSquare size={30} className='icon1'/></a>
                <a href="http://x.com"><FaSquareXTwitter size={30} className='icon2'/></a>
                <a href="http://instagram.com"><FaInstagramSquare size={30} className='icon3'/></a>
              </div>
              
            </Col>
            <Col className="feedback-col">
                <h5 className='text-center'>Give us a feedback</h5>
                <textarea name="" id="" style={{width: "100%", borderRadius: '10px', height: '8em', textIndent: '5px',resize: 'none'}}></textarea>
                <div style={{width: '100%', display: 'flex', justifyContent: 'start'}}>
                  <button style={{border: 'none', backgroundColor: '#007BFF', padding: '10px', borderRadius: '5px'}} 
                  onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')} // Darker blue on hover
                  onMouseLeave={(e) => (e.target.style.backgroundColor = '#007BFF')}
                  className='feedback-btn'>
                    Send Feedback
                  </button>
                </div>
            </Col>
          </Row>
          <p className='text-center' style={{paddingTop: '10px'}}><b>Disclamer:</b> The content on this website is for informational purposes only and should not be considered legal advice. For assistance, consult appropriate authorities or legal professionals.</p>
          <p className='w-5 text-center'>&copy;{new Date().getFullYear()} safeSpace. All rights reserved.</p>
        </Container>
            </footer>
          </div>
         
        </div>

       
       

        {/* Back to Top Button */}
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
    </>
  );
}

export default Home;
