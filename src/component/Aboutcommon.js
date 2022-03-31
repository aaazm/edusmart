import React from "react";
import {Container, Col, Row} from "react-bootstrap";
import Common from './Commontxt';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from '../helper/Testimonialslid';
import Image from '../helper/Image'

const Aboutcomon = () => {
  var testimonial = {
    dots: true,
    navigator: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return(
    <>
      <section className='parallax section db parallax-off'>
      <Container>

        <div className="section-title text-center">
            
        <Common title='Testimonials' 
             para='Lorem ipsum dolor sit aet, consectetur adipisicing lit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'/>
        </div>
        <div className="row">
            <div className="col-md-12 col-sm-12">
                <div className="testi-carousel owl-carousel owl-theme testimonials">
                <Slider {...testimonial}>
                  {Testimonial.map(( data)=> {
                    return(
                      <div className="testimonial clearfix" key={data.id}>
                      <div className="testi-meta">
                                        <img src={data.img}alt="" className="img-fluid" />
                                        <h4>{data.name}</h4>
                                    </div>
                                    <div className="desc">
                                        <h3><i className="fa fa-quote-left"></i>{data.titl}</h3>
                                        <p className="lead">{data.para}</p>
                                    </div>
                                    
                                </div>
                    )
                  })}
                   
                    </Slider>
                </div>
            </div>
        </div>
    </Container>
      </section>

      <section className="parallax section dbcolor">
        <Container>
          <Row>
          {Image.map((data) =>{
                             return(
                              <Col md='2'>
                              <div>
                                  <img src={data.img} />
                              </div>
                          </Col>
                             )
          })}
          </Row>
        </Container>
      </section>
  </>
  )
}

export default Aboutcomon;