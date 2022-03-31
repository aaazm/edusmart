import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
    <Container>
        <Row>
            <Col md='4'>
                <div className="widget clearfix">
                    <div className="widget-title">
                        <h3>About US</h3>
                    </div>
                    <p> Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis montes.</p>   
                    <div className="footer-right">
                        <ul className="footer-links-soi">
                            <li><NavLink to='/'><i className="fa fa-facebook"></i></NavLink></li>
                            <li><NavLink to='/'><i className="fa fa-github"></i></NavLink></li>
                            <li><NavLink to='/'><i className="fa fa-twitter"></i></NavLink></li>
                            <li><NavLink to='/'><i className="fa fa-dribbble"></i></NavLink></li>
                            <li><NavLink to='/'><i className="fa fa-pinterest"></i></NavLink></li>
                        </ul>
                    </div>						
                </div>
            </Col>

            <Col md='4'>
                <div className="widget clearfix">
                    <div className="widget-title">
                        <h3>Information Link</h3>
                    </div>
                    <ul className="footer-links">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/'>Blog</NavLink></li>
                        <li><NavLink to='/'>Pricing</NavLink></li>
                        <li><NavLink to='/'>About</NavLink></li>
                        <li><NavLink to='/'>Contact</NavLink></li>
                    </ul>
                </div>
            </Col>
            
            <Col md='4'>
                <div className="widget clearfix">
                    <div className="widget-title">
                        <h3>Contact Details</h3>
                    </div>

                    <ul className="footer-links">
                        <li><NavLink to='/'>info@yoursite.com</NavLink></li>
                        <li><NavLink to='/'>www.yoursite.com</NavLink></li>
                        <li>PO Box 16122 Collins Street West Victoria 8007 Australia</li>
                        <li>+61 3 8376 6284</li>
                    </ul>
                </div>
            </Col>
            
        </Row>
    </Container>
</footer>
  )
}

export default Footer;

