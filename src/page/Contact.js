import React from 'react';
import Commonpag from '../helper/Commomprops';
import Common from '../component/Commontxt';
import {Container, Row, Col} from 'react-bootstrap';

const Contact = () => {
  return(
      <>
      <Commonpag titl='Contact' 
           content='Lorem Ipsum dolroin gravida nibh vel velit.'
   />

<Common title='Need Help? Sure we are Online!' 
         para='Let us give you more details about the special offer website you want us. Please fill out the form below.
         We have million of website owners who happy to work with us!'/>

          <Container>
          <Row>
                <Col md='12 mb-4'>
                    <div className="contact_form">
                        <div id="message"></div>
                        <form id="contactform" className="" action="" name="contactform" method="post">
                           <Row>
                                <Col md= '6'>
                                    <input type="text" name="first_name" id="first_name" className="form-control" placeholder="First Name" />
                                    </Col>
                                <Col md= '6'>
                                    <input type="text" name="last_name" id="last_name" className="form-control" placeholder="Last Name" />
                                    </Col>
                                <Col md= '6'>
                                    <input type="email" name="email" id="email" className="form-control" placeholder="Your Email" />
                                    </Col>
                                <Col md= '6'>
                                    <input type="text" name="phone" id="phone" className="form-control" placeholder="Your Phone" />
                                  </Col>
                                  <Col md= '12'>
                                    <textarea className="form-control" name="comments" id="comments" rows="6" placeholder="Give us more details.."></textarea>
                                    </Col>
                                <div className="text-center pd">
                                    <button type="submit" value="SEND" id="submit" className="btn btn-light btn-radius btn-brd grd1 btn-block">Get a Quote</button>
                                </div>
                                </Row>
                        </form>
                    </div>
                    </Col>
        </Row>
          </Container>
        </>
   
  )
}

export default Contact;