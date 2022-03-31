import React from "react";
import Commonpag from '../helper/Commomprops';
import {Container, Row, Col} from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import Teachercomon from '../helper/Teachercomon';

const Teacthers = () => {
  return(
    <>
      <Commonpag titl='Teachers' 
           content='Lorem Ipsum dolroin gravida nibh vel velit.'
   />
      <Container>
        <Row className='mt-4'>
          {Teachercomon.map((tcdata)=> {
             return(
              <Col md='3'>
              <div class="our-team">
                <div class="team-img">
                  <img src={tcdata.techer} />
                  <div class="social">
                    <ul>
                      <li><NavLink to={tcdata.facebook} ><i class="fa fa-facebook"></i></NavLink></li>
                      <li><NavLink to={tcdata.twitter} > <i class="fa fa-twitter"></i> </NavLink></li>
                      <li><NavLink to={tcdata.linkedin} > <i class="fa fa-linkedin"></i> </NavLink></li>
                      <li><NavLink to={tcdata.skype} > <i class="fa fa-skype"></i> </NavLink></li>
                    </ul>
                  </div>
                </div>
                <div class="team-content">
                  <h3 class="title">{tcdata.name}</h3>
                  <span class="post">{tcdata.profile}</span>
                </div>
              </div>
              </Col>
             )
          })}
       
        </Row>
      </Container>
    </>
         

  )
}

export default Teacthers;