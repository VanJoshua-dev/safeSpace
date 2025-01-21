import React from 'react'
import { useEffect, useRef } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaAnglesUp } from "react-icons/fa6";
import './article.css'
import Footer from './Footer.jsx'
function Articles(props) {
    useEffect(() => {
        console.log(props.icons)
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
    <div className='article-container' ref={containerRef}>
      <Container>
        <Row>
          <Col className='article1'>
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
                          <Col className="Article6 w-5 border border1 boder-dark d-flex flex-column justify-content-center p-2 rounded">
                            <h6>FAQs Republic Act No. 11313: Safe Spaces Act (Bawal Bastos Law)</h6>
                              <p>Frequently asked questions about the Safe Spaces Act, provided by the Philippine Commission on Women.</p>
                              <p className="text-decoration-underline">Publisher: Philipine Coast Guard</p>
                              <div className="btn-6 w-100 d-flex justify-content-center align-items-center">
                                <a 
                                href="https://pcw.gov.ph/faq-republic-act-no-11313/?" 
                                className="article-6 text-decoration-none h-5 bg-primary text-white p-2 rounded"
                                
                                >Click to view</a>
                              </div>
                          </Col>
                        </Row>
                        <br />
                        <Row className='gap-4'>
                          <Col className="Article7 w-5 border border1 boder-dark d-flex flex-column justify-content-center p-2 rounded">
                              <h6>Combating Excessive Staring Under Philippine Law</h6>
                                <p>An article discussing how the Safe Spaces Act addresses behaviors like excessive staring.</p>
                                <p className="text-decoration-underline">Publisher: Respicio & Co.</p>
                                <div className="btn-7 w-100 d-flex justify-content-center align-items-center">
                                  <a 
                                  href="https://www.lawyer-philippines.com/articles/combating-excessive-staring-under-philippine-law?" 
                                  className="article-7 text-decoration-none h-5 bg-primary text-white p-2 rounded"
                                  
                                  >Click to view</a>
                                </div>
                          </Col>
                          <Col className="Article8 w-5 border border1 boder-dark d-flex flex-column justify-content-center p-2 rounded">
                              <h6>Filling In the Loopholes: An Assessment of The Philippine Safe Spaces Act</h6>
                                <p>A scholarly paper assessing the effectiveness and scope of the Safe Spaces Act.</p>
                                <p className="text-decoration-underline">Publisher: ResearchGate</p>
                                <div className="btn-8 w-100 d-flex justify-content-center align-items-center">
                                  <a 
                                  href="https://www.researchgate.net/publication/367190018_Filling_In_the_Loopholes_An_Assessment_of_The_Philippine_Safe_Spaces_Act?" 
                                  className="article-8 text-decoration-none h-5 bg-primary text-white p-2 rounded"
                                  
                                  >Click to view</a>
                                </div>
                            </Col>
                            <Col className="Article9 w-5 border border1 boder-dark d-flex flex-column justify-content-center p-2 rounded">
                              <h6>Republic Act No. 11313 Safe Spaces Act (Bawal Bastos Law).pptx</h6>
                                <p>A presentation summarizing key aspects of the Safe Spaces Act.</p>
                                <p className="text-decoration-underline">Publisher: www.slideshare.net</p>
                                <div className="btn-9 w-100 d-flex justify-content-center align-items-center">
                                  <a 
                                  href="https://www.slideshare.net/slideshow/republic-act-no-11313-safe-spaces-act-bawal-bastos-lawpptx/256141440?" 
                                  className="article-9 text-decoration-none h-5 bg-primary text-white p-2 rounded"
                                  
                                  >Click to view</a>
                                </div>
                            </Col>
                        </Row>
                      </Container>
                   </div>
                  </Col>
          </Col>
        </Row>
      </Container>
      <br />
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
    
  )
}

export default Articles
