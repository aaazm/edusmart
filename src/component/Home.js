import {Fragment, useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bnrslid from '../helper/Helper';
import {NavLink} from "react-router-dom";
import Common from '../component/Commontxt';
import AboutSec from '../component/Aboutsec';
import { Container,Row,Col,Tabs,Tab,Button } from 'react-bootstrap';
import Price from '../helper/Price';
import Aboutcomon from './Aboutcommon'
const Home = () =>{
  var settings = {
    dots: true,
    navigator: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  var history = {
    dots: true,
    navigator: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  const [data, setData]= useState([
    {id: '1', username: 'Aazam'},
    {id: '2', username: 'pankaj'},
    {id: '3', username: 'Manoj'},
    {id: '4', username: 'Narender'},
    {id: '5', username: 'Deva'},
    {id: '6', username: 'Akash'},
  ]);

  const handledelete= (id) => {
      const newdata =data.filter(data=> data.id!==id)
      setData(newdata)
  }
    return(
      <>
      <section className='banner'>

       <Slider {...settings}>
         {Bnrslid.map(( data)=> {
             return(
              <div className='slid-txt first-section' key={data.id}>
              <img src={data.img} />
              <div className="big-tagline carousel-caption">
                          <h2><strong>{data.strTxt} </strong> {data.nrTxt}</h2>
                          <p className="lead">{data.prTxt} </p>
                            <NavLink to={data.visit} className="hover-btn-new"><span>{data.contBtn}</span></NavLink>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <NavLink to={data.visit} className="hover-btn-new"><span>{data.readBtn}</span></NavLink>
                        </div>
            </div>
             )
         })}
      
    </Slider>

    </section>

         <Common title='About' 
         para='Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem!'/>
         
          <AboutSec />
          {/* <section className="section lb page-section">
          <Container>
			      <Row className="section-title row text-center">
                <Col md='12'>
                <Common title='Our history' 
                  para='Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem!'/>
                    </Col>
                </Row>
                  <div className="timeline">
                <div className="timeline__wrap">
                  <div className="timeline__items">
                        <Slider {...history}>
                        <div className="timeline__item">
							<div className="timeline__content img-bg-01">
								<h2>2018</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus. Lorem
									ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</div>
						</div>
            <div className='timeline timeline--loaded timeline--horizontal'>
						<div className="timeline__item timeline__item--top">
							<div className="timeline__content img-bg-02">
								<h2>2015</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus. Lorem
									ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</div>
						</div>
						<div className="timeline__item timeline__item--bottom">
							<div className="timeline__content img-bg-03">
								<h2>2014</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus. Lorem
									ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</div>
						</div>
						<div className="timeline__item timeline__item--top">
							<div className="timeline__content img-bg-04">
								<h2>2012</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus. Lorem
									ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</div>
						</div>
						<div className="timeline__item timeline__item--bottom">
							<div className="timeline__content img-bg-01">
								<h2>2010</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus. Lorem
									ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</div>
						</div>
						<div className="timeline__item timeline__item--top">
							<div className="timeline__content img-bg-02">
								<h2>2007</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus. Lorem
									ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</div>
						</div>
						<div className="timeline__item timeline__item--bottom">
							<div className="timeline__content img-bg-03">
								<h2>2004</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus. Lorem
									ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</div>
						</div>
						<div className="timeline__item timeline__item--top">
							<div className="timeline__content img-bg-04">
								<h2>2002</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim neque condimentum lacus dapibus. Lorem
									ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</div>
						</div>
            </div>
            </Slider>
                    </div>
                    </div>
                    </div>
              
                </Container>
          </section> */}
          

    <div className="section cl">
		<Container>
			<Row className='text-left stat-wrap'>
				<Col md='4'>
					<span data-scroll className="global-radius icon_wrap effect-1 alignleft"><i className="fa fa-users"></i></span>
					<p className="stat_count">12000</p>
					<h3>Students</h3>
			</Col>

				<Col md='4'>
					<span data-scroll className="global-radius icon_wrap effect-1 alignleft"><i className="fa fa-lightbulb-o"></i></span>
					<p className="stat_count">240</p>
					<h3>Courses</h3>
			</Col>

				<Col md='4'>
					<span data-scroll className="global-radius icon_wrap effect-1 alignleft"><i className="fa fa-calendar"></i></span>
					<p className="stat_count">55</p>
					<h3>Years Completed</h3>
			</Col>
        </Row>
      </Container>
	</div>


  <section id="plan" className='section lb'>
         <Container>
         <Common title='Choose Your Plan' 
         para='Lorem ipsum dolor sit aet, consectetur adipisicing lit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>

            <Row>
            
              <Col md='12'>
              <div class="message-box">
              <Tabs
                  defaultActiveKey="price1"
                  transition={false}
                  id="noanim-tab-example"
                  className="mb-3 nav-pills"
                >
                  <Tab eventKey="price1" title="Monthly Subscription">
                      <Row className='text-center'>
                        {Price.map((data)=> {
                          return(
                            <Col md='4'>
                            <div className="pricing-table pricing-table-highlighted">
                                        <div className="pricing-table-header grd1">
                                             <h3>{data.month}</h3>
                                        </div>
                                        <div className="pricing-table-space"></div>
                                        <div className="pricing-table-features">
                                            <p><i className="fa fa-envelope-o"></i> <strong>{data.strg}</strong> {data.emiladr}</p>
                                            <p><i className="fa fa-rocket"></i> <strong>{data.strg2}</strong> {data.storeg}</p>
                                            <p><i className="fa fa-database"></i> <strong>{data.strg3}</strong> {data.databs}</p>
                                            <p><i className="fa fa-link"></i> <strong>{data.strg4}</strong> {data.domain}</p>
                                            <p><i className="fa fa-life-ring"></i> <strong>{data.strg5}</strong> {data.suport}</p>
                                        </div>
                                        <div className="pricing-table-sign-up">
                                            <NavLink to={data.visitBtn} className="hover-btn-new orange"><span>{data.bdrBtn}</span></NavLink>
                                        </div>
                                    </div>
                        </Col>
                          )
                        })}
                       
                        
                      </Row>
                  </Tab>
                  <Tab eventKey="profile" title="Yearly Subscription">
                  <Row className='text-center'>
                        <Col md='4'>
                        <div className="pricing-table pricing-table-highlighted">
                                        <div className="pricing-table-header grd1">
                                            <h2>$477</h2>
                                            <h3>Year</h3>
                                        </div>
                                        <div className="pricing-table-space"></div>
                                        <div className="pricing-table-features">
                                            <p><i className="fa fa-envelope-o"></i> <strong>250</strong> Email Addresses</p>
                                            <p><i className="fa fa-rocket"></i> <strong>125GB</strong> of Storage</p>
                                            <p><i className="fa fa-database"></i> <strong>140</strong> Databases</p>
                                            <p><i className="fa fa-link"></i> <strong>60</strong> Domains</p>
                                            <p><i className="fa fa-life-ring"></i> <strong>24/7 Unlimited</strong> Support</p>
                                        </div>
                                        <div className="pricing-table-sign-up">
                                            <a href="#" className="hover-btn-new orange"><span>Order Now</span></a>
                                        </div>
                                    </div>
                        </Col>
                        <Col md='4'>
                        <div className="pricing-table pricing-table-highlighted">
                                        <div className="pricing-table-header grd1">
                                            <h2>$485</h2>
                                            <h3>Year</h3>
                                        </div>
                                        <div className="pricing-table-space"></div>
                                        <div className="pricing-table-features">
                                            <p><i className="fa fa-envelope-o"></i> <strong>150</strong> Email Addresses</p>
                                            <p><i className="fa fa-rocket"></i> <strong>65GB</strong> of Storage</p>
                                            <p><i className="fa fa-database"></i> <strong>60</strong> Databases</p>
                                            <p><i className="fa fa-link"></i> <strong>30</strong> Domains</p>
                                            <p><i className="fa fa-life-ring"></i> <strong>24/7 Unlimited</strong> Support</p>
                                        </div>
                                        <div className="pricing-table-sign-up">
                                            <a href="#" className="hover-btn-new orange"><span>Order Now</span></a>
                                        </div>
                                    </div>
                        </Col>
                        <Col md='4'>
                        <div className="pricing-table pricing-table-highlighted">
                                        <div className="pricing-table-header grd1">
                                            <h2>$500</h2>
                                            <h3>Year</h3>
                                        </div>
                                        <div className="pricing-table-space"></div>
                                        <div className="pricing-table-features">
                                            <p><i className="fa fa-envelope-o"></i> <strong>250</strong> Email Addresses</p>
                                            <p><i className="fa fa-rocket"></i> <strong>125GB</strong> of Storage</p>
                                            <p><i className="fa fa-database"></i> <strong>140</strong> Databases</p>
                                            <p><i className="fa fa-link"></i> <strong>60</strong> Domains</p>
                                            <p><i className="fa fa-life-ring"></i> <strong>24/7 Unlimited</strong> Support</p>
                                        </div>
                                        <div className="pricing-table-sign-up">
                                            <a href="#" className="hover-btn-new orange"><span>Order Now</span></a>
                                        </div>
                                    </div>
                        </Col>
                      </Row>
                  </Tab>
                </Tabs>
                    </div>
              </Col>
            </Row>
         </Container>
  </section>
            {/* <section>
              <Row>
                <Col md='12'>
                 <table border='1'>
                   <tr>
                     {data.map((data)=> {
                        return(
                          <Fragment>
                            <td>{data.id}</td>
                          <td>{data.username}</td>
                          <Button onClick={()=> handledelete(data.id)}>Delete</Button>
                          </Fragment>
                        )
                        
                     })}
                    
                   </tr>
                 </table>
                </Col>
              </Row>
            </section> */}
            <Aboutcomon />
    </>


    )

}

export default Home;