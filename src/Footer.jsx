import React from 'react'
import './Footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//icons
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
function Footer() {
  return (
    <div className='univ-footer'>
      <footer >
        <Container >
          <Row style={{ width: '100%'}}>
            <Col md={3} style={{ width: '380px'}}>
              <h5>About safeSpace</h5>
              <p className='text-justify'>SafeSpace PH is a platform promoting awareness about the Safe Spaces Act (RA 11313).</p>
              <h5>Our Mission</h5>
              <p className='text-justify'>Our mission is to provide resources and support to help create safer spaces for everyone.</p>
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
                <textarea name="" id="" style={{width: "100%", borderRadius: '10px', height: '8em', textIndent: '5px', resize: 'none'}}></textarea>
                <div style={{width: '100%'}}>
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
    
  )
}

export default Footer
