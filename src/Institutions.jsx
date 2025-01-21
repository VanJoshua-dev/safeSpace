import { useEffect, useRef } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaAnglesUp } from "react-icons/fa6";
import './Institution.css'
import Carousel from "react-bootstrap/Carousel";
import Footer from './Footer.jsx'
import pic1 from "./assets/pic1.jpeg";
import pic2 from "./assets/pic2.jpeg";
import pic3 from "./assets/pic3.jpeg";
import pic4 from "./assets/Smart-Slider-iacat-scaled.jpeg";
import pic5 from "./assets/wpla-homepage-banner.jpeg";
import pic6 from "./assets/pic6.jpeg";

//
import pcw from "./assets/pcw.png";
import dilg from "./assets/dilg.png";
import chr from "./assets/chr.png";
import csc from "./assets/csc.png";
import dole from "./assets/dole.png";
import deped from "./assets/deped.png";
import ched from "./assets/ched.png";
import pnp from "./assets/pnp.png";
import dict from "./assets/dict.png";
import priv from "./assets/priv.png";
function Institutions(props) {
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
        const speed = window.innerWidth <=800 ? 0.3 : 5; // Faster scrolling on mobile
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
    <div className="Institution-container" ref={containerRef}>
        <Container>
          <Row>
            <Col>
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
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <Row>
            <Col>
              <p className="text-justify">
                  The Safe Spaces Act <b>(Republic Act No. 11313)</b>, also known as the "Bawal Bastos Law", is 
                enforced and implemented by various institutions in the Philippines. Each organization has a 
                specific role in ensuring the law’s provisions are carried out effectively to address gender-based 
                sexual harassment in public spaces, workplaces, schools, and online platforms. <br /><br /> <b>These institutions include:</b>
              </p>
            </Col>
          </Row>
          <Row className="border border-1 border-dark rounded">
            <Col className="d-flex flex-column justify-content-center align-items-center">
              <h6 className="w-100 text-start">
                <p className="w-5 text-start" >
                1. Philippine Commission on Women (PCW) 
                </p>
              </h6>
              <p>The PCW serves as the lead agency in promoting gender equality and women’s empowerment, 
                  playing a crucial role in the implementation of the Safe Spaces Act. It conducts awareness 
                  campaigns, training, and provides guidance to other institutions to ensure compliance with 
                  the law.
              </p>
            </Col>
            <Col className="d-flex justify-content-center align-items-center p-2">
                <img src={pcw} alt="pcw"/>
            </Col>
          </Row>
          {/*2*/}
          <Row className="my-3 border border-1 border-dark rounded">
            <Col className="d-flex flex-column justify-content-center align-items-center">
            <h6 className="w-100 text-start">
                <p className="w-5 text-start" >
                2. Department of the Interior and Local Government (DILG)
                </p>
              </h6>
              <p>
                The DILG oversees the implementation of the law at the local government level. 
                Local government units (LGUs), through their barangays, are responsible for creating ordinances 
                and measures to prevent and address gender-based harassment in public spaces, like streets, 
                parks, and public transportation.
              </p>
            </Col>
            <Col className="d-flex justify-content-center align-items-center p-2">
              <img src={dilg} alt="dilg" className="img-fluid" />
            </Col>
          </Row>
          {/*3*/}
          <Row className="my-3 border border-1 border-dark rounded">
            <Col className="d-flex flex-column justify-content-center align-items-center">
            <h6 className="w-100 text-start">
                <p className="w-5 text-start" >
                3. Commission on Human Rights (CHR)
                </p>
              </h6>
              <p>
              The CHR acts as a watchdog for human rights violations, including those under 
              the Safe Spaces Act. It monitors cases, assists victims, and ensures that the 
              rights of individuals, particularly women and vulnerable groups, are upheld.
              </p>
            </Col>
            <Col className="d-flex justify-content-center align-items-center p-2">
              <img src={chr} alt="chr" style={{mixBlendMode: 'multiply', height: '12em'}}  />
            </Col>
          </Row>
          {/*4*/}
          <Row className="my-3 border border-1 border-dark rounded">
            <Col className="d-flex flex-column justify-content-center align-items-center">
            <h6 className="w-100 text-start">
                <p className="w-5 text-start" >
                4. Civil Service Commission (CSC)
                </p>
              </h6>
              <p>
              The CSC ensures that government offices comply with the Safe Spaces Act. It 
              implements policies to prevent sexual harassment in the public sector and ensures that 
              government employees have access to grievance mechanisms to address complaints.
              </p>
            </Col>
            <Col className="d-flex justify-content-center align-items-center p-2">
              <img src={csc} alt="dilg" className="img-fluid" style={{mixBlendMode: 'multiply', height: '12em'}} />
            </Col>
          </Row>
          {/*5*/}
          <Row className="my-3 border border-1 border-dark rounded">
            <Col className="d-flex flex-column justify-content-center align-items-center">
            <h6 className="w-100 text-start">
                <p className="w-5 text-start" >
                5. Department of Labor and Employment (DOLE)
                </p>
              </h6>
              <p>
              The DOLE is responsible for enforcing the law in private workplaces. 
              Employers are required to implement policies that prevent and address harassment 
              in the workplace, including through education and grievance mechanisms.
              </p>
            </Col>
            <Col className="d-flex justify-content-center align-items-center p-2">
              <img src={dole} alt="dilg" className="img-fluid" style={{mixBlendMode: 'multiply', height: '12em'}} />
            </Col>
          </Row>
          {/*6*/}
          <Row className="my-3 border border-1 border-dark rounded">
            <Col className="d-flex flex-column justify-content-center align-items-center">
            <h6 className="w-100 text-start">
                <p className="w-5 text-start" >
                6. Department of Education (DepEd)
                </p>
              </h6>
              <p>
              The DepEd oversees the implementation of the law in elementary and secondary schools. 
              Schools are required to establish systems to handle harassment complaints and conduct gender 
              sensitivity training for students, staff, and teachers.
              </p>
            </Col>
            <Col className="d-flex justify-content-center align-items-center p-2">
              <img src={deped} alt="dilg" className="img-fluid" style={{mixBlendMode: 'multiply', height: '12em'}} />
            </Col>
          </Row>
          {/*7*/}
          <Row className="my-3 border border-1 border-dark rounded">
            <Col className="d-flex flex-column justify-content-center align-items-center">
            <h6 className="w-100 text-start">
                <p className="w-5 text-start" >
                7. Commission on Higher Education (CHED)
                </p>
              </h6>
              <p>
              The CHED ensures that the Safe Spaces Act is enforced in colleges and universities. 
              It monitors the development of policies and programs that promote safe spaces for students, 
              faculty, and staff while addressing complaints of harassment.
              </p>
            </Col>
            <Col className="d-flex justify-content-center align-items-center p-2">
              <img src={ched} alt="dilg" className="img-fluid" style={{mixBlendMode: 'multiply', height: '12em'}} />
            </Col>
          </Row>
          {/*8*/}
          <Row className="my-3 border border-1 border-dark rounded">
            <Col className="d-flex flex-column justify-content-center align-items-center">
            <h6 className="w-100 text-start">
                <p className="w-5 text-start" >
                8. Philippine National Police (PNP)
                </p>
              </h6>
              <p>
              The PNP is tasked with enforcing the law in public spaces. They are authorized to apprehend 
              individuals who commit acts of gender-based harassment, such as catcalling or wolf-whistling. 
              Specific units, such as the PNP Women and Children Protection Center (WCPC), focus on providing 
              assistance to victims.
              </p>
            </Col>
            <Col className="d-flex justify-content-center align-items-center p-2">
              <img src={pnp} alt="dilg" className="img-fluid" style={{mixBlendMode: 'multiply', height: '12em'}} />
            </Col>
          </Row>
          {/*9*/}
          <Row className="my-3 border border-1 border-dark rounded">
            <Col className="d-flex flex-column justify-content-center align-items-center">
            <h6 className="w-100 text-start">
                <p className="w-5 text-start" >
                9. Department of Information and Communications Technology (DICT)
                </p>
              </h6>
              <p>
              The DICT addresses cases of online sexual harassment under the Safe Spaces Act. 
              It works with law enforcement to track perpetrators of harassment in digital spaces 
              and ensures that online platforms remain safe for users.
              </p>
            </Col>
            <Col className="d-flex justify-content-center align-items-center p-2">
              <img src={dict} alt="dilg" className="img-fluid" style={{mixBlendMode: 'multiply', height: '12em'}} />
            </Col>
          </Row>
          {/*10*/}
          <Row className="my-3 border border-1 border-dark rounded">
            <Col className="d-flex flex-column justify-content-center align-items-center">
            <h6 className="w-100 text-start">
                <p className="w-5 text-start" >
                10. Media and Private Sector Organizations
                </p>
              </h6>
              <p>
              The DICT addresses cases of online sexual harassment under the Safe Spaces Act. 
              It works with law enforcement to track perpetrators of harassment in digital spaces 
              and ensures that online platforms remain safe for users.
              </p>
            </Col>
            <Col className="d-flex justify-content-center align-items-center p-2">
              <img src={priv} alt="dilg" className="img-fluid" style={{mixBlendMode: 'multiply', height: '12em'}} />
            </Col>
          </Row>
          <Row>
            <Col>
              <h6 className="text-justify">
              Together, these institutions ensure that the Bawal Bastos Law is enforced across various 
              sectors, from public spaces and workplaces to schools and online platforms. Each plays a 
              critical role in protecting individuals from gender-based harassment and creating safe 
              spaces for everyone in the Philippines.

              </h6>
            </Col>
          </Row>
        </Container>
        <Footer />

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
  );
}
export default Institutions;