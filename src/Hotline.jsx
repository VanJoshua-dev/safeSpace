import { useEffect, useRef } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaAnglesUp } from "react-icons/fa6";
import './Hotline.css';
import Footer from './Footer.jsx'
import hotline from './assets/Hotline.jpeg'
import assistance from './assets/where-to-seek-assistance.jpg'
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
function Hotline(props) {
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
    <div className="hotline-container" ref={containerRef}>
      <div className="hotline-header">
        <Container className="hotline">
          <Row>
            <Col className="hotline-col">
               <img src={hotline} alt="hotline" className="block" />
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <br />
      <br />
        <div className="scroll-container">
            <p>Scroll down</p>
            <MdOutlineKeyboardDoubleArrowDown size={50} className="down-icon"/>
        </div> 
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      <Container >
        <Row>
          <Col className="hot-col1 block">
            <h3 className="h_1 text-center" >Where can victims of GBSH in street and public spaces seek assistance?</h3>
          </Col>
          <Col>
            <div className="hot-img">
              <img src={assistance} alt="Where to seek assistance" className="block"/>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <Row>
          <Col className="hot-col2 block">
            <h3 >Psychological and Counseling Services</h3>
            <p>A victim of GBSH may avail of appropriate remedies as provided for under the law as well as 
              psychological counseling services with the aid of the LGU and the DSWD (in coordination with the 
              DOH).  Any fees to be charged in the course of a victim’s availment of such remedies or psycholog
              ical counseling services and other services in consonance with R.A. No. 11036 or the Philippine 
              Mental Health Law shall be borne by the perpetrator.
            </p>
            <p>LGUs and concerned agencies may partner with private entities in the provision of psychological 
              counseling services and other related processes such as the development of a referral system. In
                all instances, any fees that may be charged or incurred in the course of the counseling shall 
                be borne by the perpetrator.
            </p>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <Row>
          <Col className="hot-col3 block">
                <h3>WHERE TO SEEK HELP?</h3>  
          </Col>
        </Row>
        <br />
        <br />
        <Row style={{gap: '30px'}}>
          <Col className="hot-col4 block">
            <h3 style={{width: '100%', backgroundColor: 'lightgray', padding: '10px', borderRadius: '10px'}} className="text-center">Public Attorney’s Office</h3>
            <p >Email: <a  className="email" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCKCDCMjDKjbFVxXmWNVMLppDLSMrMbZfVzlKrZRdvxprfqXTrWzGgCppfMksWbgKfHxfMpL" >pao_executive@yahoo.com</a></p>
            <br />
            <h3>Telephone numbers</h3>
            <p className="p-10">(02)8929-9436 <br />
                (02)8426-2075 <br />
                (02)8426-2801 <br />
                (02)8426-2450 <br />
                (02)8426-2987 <br />
                (02) 8426-2683 local 106/107 (Office Hours), local 159 (Outside Office hours) 
                </p>
          </Col>
          <Col className="hot-col5 block">
                <h3 style={{width: '100%', backgroundColor: 'lightgray', padding: '10px', borderRadius: '10px'}} className="text-center">PNP Women and Children Protection Center</h3>
                <p style={{width: '100%'}}>Aleng Pulis Hotline: 0919-7777377</p>
                <p>Telephone number: (02) 8723-0401 local 5261</p>
          </Col>
        </Row>
        <br />
        <Row>
          
        </Row>
        <br />
        <br />
        <br />
        <br />
        <Row className="block">
          <Col className="hot-col6">
                <h3 className="h_6">For Online GBSH</h3>  
          </Col>
        </Row>
        <Row style={{padding: '10px', gap: '30px'}} className="block">
          <Col className="hot-col6-1">
          <h3 style={{width: '100%', backgroundColor: 'lightgray', padding: '10px', borderRadius: '10px'}} className="text-center">Cybercrime Investigation and Coordinating Center (CICC)</h3>
                <br />
                <a className="link-1" href="https://cicc.gov.ph/filing-a-complaint/submit-a-cyber-complaint/">Submit a Cyber Complaint</a>
          </Col>
          <Col className="hot-col6-2">
               <h3 className="h_7 text-center" style={{width: '100%', backgroundColor: 'lightgray', padding: '10px', borderRadius: '10px'}}>PNP Women and Children Cyber Protection Unit (WCCPU)</h3>
                <h5>Telephone numbers</h5>
                <p>(02) 8723-0401 local 5354 <br />
                0927 084 3792
                </p>
                <p>Email: <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=jrjtXRGckJPcZLWcSgqWMdLxvbNWsQlvssWzlRdcwhmFHTFfKCgNQVzhvbRbtVXvBJCSkZTk">pnpacg.wccpu@gmail.com</a></p>
          </Col>
          
        </Row>
        <Row className="block w-50" style={{padding: '10px', marginTop: '15px'}}>
            <Col className="hot-col6-3">
              <h3 style={{width: '100%', backgroundColor: 'lightgray', padding: '10px', borderRadius: '10px'}} className="text-center">Office of the Cybercrime (OOC)</h3>
                <br />
                <p>3rd floor De Las Alas Bldg.
                  Department of Justice
                  P. Faura St., Ermita, Manila <br />
                  Email: <a href="...">cybercrime@doj.gov.ph</a>
                </p>
                <br />
                <h5>Telephone numbers:</h5>
                <p>(02) 8526-2747 and (02) 8521-8345</p>
            </Col>  
          </Row>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Row className="gap-4 mb-5">
        <h3 className="text-center">Under SSA, the following agencies are mandated to conduct routine inspections in relation to GBSH in the workplace:</h3>
          <Col className="hot-col7 block">

             <h3 style={{width: '100%', backgroundColor: 'lightgray', padding: '10px', borderRadius: '10px'}} className="text-center">Department of Labor and Employment</h3>
             <p >24/7 Hotline: 1349</p>

          </Col>
          <Col className="hot-col7-1">
            <h3 style={{width: '100%', backgroundColor: 'lightgray', padding: '10px', borderRadius: '10px'}} className="text-center">Civil Service Commission</h3>
            <h5>Telephone numbers:</h5>
            <p>(02) 8931-8092 <br />
            8931-7939<br />
            8931-7935
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
export default Hotline;