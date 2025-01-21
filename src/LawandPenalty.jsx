
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaAnglesUp } from "react-icons/fa6";
import { useEffect, useRef } from 'react'
import './Law.css';
import Footer from './Footer.jsx'
import safeSpace from './assets/safes-space-refer-to.jpg'
import penalty from './assets/safeSpace-penalty.jpg'
import safespacepenalty from './assets/penalty.jpeg';
import penalty1 from './assets/penalty1.jpg';
import penalty2 from './assets/penalty2.jpg';
function LawandPenalty(props) {
  useEffect(() => {
        console.log(props.icons)
        // Ensure the icon exists before trying to manipulate it
        const icon = document.getElementById(props.icons);
        const tab = document.querySelector(props.tabs)
        if (icon) {
          icon.style.color = "rgb(62, 65, 103)";
          tab.style.backgroundColor = "rgb(40, 42, 70)"; // Change the color of the icon
        }
    
        // Cleanup function to reset the color when the component unmounts
        return () => {
          if (icon) {
            icon.style.color = ""; // Reset to default
            tab.style.backgroundColor = "";
          }
        };
      }, [props.icons]);
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
    <div className='lawandpenalty-container' ref={containerRef}>
      <div className='header-image'>
        <Container>
          <Col className='header-col'>
            <h1 className='law-header'>Law and Penalty</h1>
            <img src={safespacepenalty} alt="Penalty" />
          </Col>
        </Container>
      </div>
        <Container  className='law-penalty'>
          <Row>
            <Col>
              
            </Col>
          </Row>
          <Row className='law-row1'>
            <Col className='law-col1'>
              <h3 className='start-header'>Gender-based Streets and Public Spaces Sexual Harassment</h3>
              <p className='p1'>GBSH in street and public spaces is defined as acts 
                which are committed through any unwanted and uninvited 
                sexual actions or remarks against any person regardless 
                of the motive for committing such action or remarks. 
                </p>
                 
            </Col>
            <Col className='law-col1-1'>
              <div className='img1'>
                <img src={safeSpace} alt="safe space" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col className='law-col2'>
              <h3 className='Q1'>What are the penalties for GBSH in public spaces?</h3>
                <p className="p2">Penalties vary according to the act of GBSH committed and how 
                  often a person was convicted for violating the laws.</p>
            </Col>
            <Col className='law-col2-1'>
                <div className='img2'>
                  <img src={penalty} alt="penalty" />
                </div>
            </Col>
          </Row>
          <Row>
              <Col className='law-col3'>
                <h3>Additional penalties if the perpetrator is the driver or operator of a PUV:</h3>
                <div style={{marginLeft: '20px'}}>
                  <li>
                  Cancellation of license of the driver by the Land Transportation Office (LTO)
                  </li>
                  <li>Suspension or revocation of franchise by the Land Transportation Franchising 
                    and Regulatory Board (LTFRB). This sanction may be imposed upon order by the proper 
                    court OR upon order of LTO/LTFRB in an administrative proceeding
                  </li>
                </div>
                <br />
                <p className='p3'>
                  PUVs include motor vehicles considered as public transport conveyance or common carrier 
                  duly registered with the LTO and granted a franchise by the LTFRB including special PUVs 
                  such as school services. PUV also includes public water transport utilities and air carrier 
                  or operator as registered with and/or regulated by the Maritime Industry Authority, the Civil 
                  Aviation Authority of the Philippines, or the Civil Aeronautics Board.
                </p>
              </Col>
          </Row>
          <Row>
            <Col className='law-col4'>
              <h3>What can a victim of workplace GBSH do?</h3>
              <p className='p4'>
                The victim can file an administrative complaint with the Committee on Decorum and Investigation and/or file a civil and/or criminal case before the courts.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className='law-col5'>
              <h3>What are the responsibilities of employers under the Safe Spaces Act?</h3>
              <p className='p5'>
                Under the Safe Spaces Act, employers must:
              </p>
              <div>
                <ol type='a'>
                  <li>disseminate or post in a conspicuous place a copy of the law to all persons in the workplace;</li>
                  <li>provide measures to prevent GBSH in the workplace, such as the conduct of anti-sexual harassment seminars;</li>
                  <li>create an independent internal mechanism or a committee on decorum and investigation (CODI) to investigate and address complaints of gender-based sexual harassment;</li>
                  <li>develop and disseminate, in consultation with all persons in the workplace, a code of conduct or workplace policy which shall:</li>
                  <li>Expressly reiterate the prohibition on gender-based sexual harassment;</li>
                  <li>Describe the procedures of the internal mechanism;</li>
                  <li>Set administrative penalties.</li>
                </ol>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>The <b>Code of Conduct</b> to be developed by the employer may provide for penalties to be imposed on members of the CODI in cases of non-performance or inadequate performance of functions –Sec. 32. Development of Code of Conduct, RA 11313 IRR</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>The CODI to be established by the employer should:</h3>
              <div>
                <ol type='1'>
                  <li>adequately represent the management, the employees from the supervisory rank, the rank-and-file employees, and the union/s or employee’s association if any;</li>
                  <li>designate a woman as its head and not less than half of its members should be women;</li>
                  <li>be composed of members who should be impartial and not connected or related to the alleged perpetrator;</li>
                  <li>investigate and decide on the complaints within ten (10) days or less upon receipt thereof;</li>
                  <li>observe due process;</li>
                  <li>protect the complainant from retaliation without causing her/him any disadvantage, diminution of benefits or displacement without compromising his/her security of tenure; and </li>
                  <li>guarantee gender-sensitive handling of cases, and confidentiality to the greatest extent possible;</li>
                </ol>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>What are the penalties for the employers?</h3>
              <br />
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <img src={penalty1} alt="Penalty" className='img-fluid'/>
              </div>
              
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>What are the duties of heads of educational and training institutions under the Safe Spaces Act?</h3>
              <p>
                The same requirements and corresponding penalties imposable upon employers are also applicable to heads of educational and training institutions. So these heads are also required to disseminate the law, develop their own Code of Conduct and establish and/or update the composition of the CODI. Note that these heads have to harmonize the CODI for their employees and for their students.
              </p>
              <p>In addition to such duties, it also requires them to:</p>
              <ol type='1'>
                <li>designate an officer-in-charge to receive complaints regarding violations of the law and forward them to the CODI;</li>
                <li>impose administrative disciplinary measures for students who commit acts of GBSH against their fellow students or teachers;</li>
                <li>if a school knows or reasonably should know about acts of gender-based sexual harassment or sexual violence being committed that creates a hostile environment, the school must take immediate action to eliminate the same acts, prevent their recurrence, and address their effects;</li>
                <li>educate students from the elementary to tertiary level about the provisions of the law and how they can report cases of gender-based streets, public spaces and online sexual harassment committed against them.</li>
              </ol>
              <p>School heads and heads of training institutions covered by the Commission on Higher Education (CHED), Department of Education (DepED), and Technical Education and Skills Development Authority (TESDA) shall comply with the standards set by the said agencies.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>The CODI to be established by the education and training institution should:</h3>
              <div>
                <ol type='1'>
                  <li>be composed of representatives from the school administration, the trainers, instructors, professors or coaches and students or trainees, students and parents, as the case may be;</li>
                  <li>designate a woman as its head and not less than half of its members should be women;</li>
                  <li>be composed of members who should be impartial and not connected or related to the alleged perpetrator;</li>
                  <li>investigate and decide on the complaints within ten (10) days or less upon receipt thereof;</li>
                  <li>observe due process;</li>
                  <li>protect the complainant from retaliation without causing her/him any disadvantage, diminution of benefits, or displacement, and without compromising his/her security of tenure; and</li>
                  <li>guarantee gender-sensitive handling of cases, and confidentiality to the greatest extent possible.</li>
                </ol>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>What are the penalties for GBSH in education and training institutions under SSA?</h3>
              <br />
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <img src={penalty2} alt="Penalty" className='img-fluid'/>
              </div>
              <br />
              <p>Note: Minor students who are found to commit GBSH shall be held liable for administrative sanctions by the school, as provided in their student handbook.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Exemptions</h3>
              <p>Acts that are legitimate expressions of indigenous culture and tradition, as well as breastfeeding in public shall not be penalized under the SSA.</p>
              <p>Expressions of indigenous culture and tradition include, among others, the wearing of traditional attires of tribes or clans that may show partial nudity. Provided that, such expressions of indigenous culture and tradition do not discriminate against women, girls, and persons of diverse sexual orientation, gender identity, and expression.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Confidentiality</h3>
              <div style={{marginLeft: '20px'}}>
                  <li>The RA 11313 requires that at any stage of the investigation, prosecution, and trial of an offense under RA 11313, the rights of victim and the accused who is a minor shall be recognized. </li>
                  <li>The law requires that confidentiality should be observed at all times by employers and heads of schools and training institutions in complaints to GBSH in their institutions.</li>
              </div>
            </Col>
          </Row>
          <br />
        </Container>
        <Footer />
         {/* Back to Top Button */}
                <div
                  className="backtotop-wrapper" id="mybtn"
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
  )
}

export default LawandPenalty
