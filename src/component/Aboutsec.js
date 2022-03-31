import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import about1img from '../images/about_02.jpg';
import about2img from '../images/about_03.jpg';

const AboutSec = () => {
  return (
    <>
      <section className="aboutsec">
          <Container>
            <Row>
              <Col md='6'>
                <div className="message-box">
                <h4>2018 BEST SmartEDU education school</h4>
                        <h2>Welcome to SmartEDU education school</h2>
                        <p>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus. Sed a tellus quis mi rhoncus dignissim.</p>

                        <p> Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis montes, nascetur ridiculus mus. Sed vitae rutrum neque. </p>

                        <NavLink to='/about' className="hover-btn-new orange"><span>Learn More</span></NavLink>
                </div>
              </Col>
              <Col md='6'>
              <div class="post-media wow fadeIn">
                        <img src= {about1img} alt="" className="img-fluid img-rounded" />
                    </div>
              </Col>

              
              <Col md='6'>
              <div class="post-media wow fadeIn">
                        <img src= {about2img} alt="" className="img-fluid img-rounded" />
                    </div>
              </Col>
              <Col md='6'>
                <div className="message-box">

                        <h2>The standard Lorem Ipsum passage, used since the 1500s</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <p>Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum.</p>

                        <NavLink to='/about' className="hover-btn-new orange"><span>Learn More</span></NavLink>
                </div>
              </Col>
            </Row>
          </Container>
      </section>
    </>
  )
}

export default AboutSec;

