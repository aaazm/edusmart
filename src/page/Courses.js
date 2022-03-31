import React from "react";
import Commonpag from '../helper/Commomprops';
import Common from '../component/Commontxt';
import {Container, Row, Col} from 'react-bootstrap';
import Coursehelper from '../helper/Courses'

const Courses = () => {
  return(
    <>
           <Commonpag titl='Courses' 
           content='Lorem Ipsum dolroin gravida nibh vel velit.'
   />

      <Common
         para='Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem!'/>

          <Container>
          <Row> 
            {Coursehelper.map((data)=> {
                  return(
                    <Col md='6' className='mb-4'>
                  <div class="course-item">
          <div class="image-blog">
            <img src={data.imagg} alt="" class="img-fluid" />
          </div>
          <div class="course-br">
            <div class="course-title">
              <h2><a href="#" title="">{data.titl}</a></h2>
            </div>
            <div class="course-desc">
              <p>{data.paragraph}</p>
            </div>
            <div class="course-rating">
              4.5
              <i class="fa fa-star"></i>	
              <i class="fa fa-star"></i>	
              <i class="fa fa-star"></i>	
              <i class="fa fa-star"></i>	
              <i class="fa fa-star-half"></i>								
            </div>
          </div>
          <div class="course-meta-bot">
            <ul>
              <li><i class="fa fa-calendar" aria-hidden="true"></i> 6 Month</li>
              <li><i class="fa fa-users" aria-hidden="true"></i> 56 Student</li>
              <li><i class="fa fa-book" aria-hidden="true"></i> 7 Books</li>
            </ul>
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

export default Courses