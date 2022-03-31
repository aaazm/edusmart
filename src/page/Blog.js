import React from "react";
import Commonpag from '../helper/Commomprops';
import Common from '../component/Commontxt';
import {Row, Col, Container} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import Blogcomon from '../helper/Blogcomon'

const Blog = () => {
  return(
   <>
    <Commonpag titl='Blog' 
           content='Lorem Ipsum dolroin gravida nibh vel velit.'
   />
      <Common
         para='Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem!'/>
    <Container>
   <Row className='mt-3 mb-3'>
     {Blogcomon.map((data)=> {
        return(
          <Col md='4' className="mb-4">
        <div className="blog-item">
<div className="image-blog">
  <img src={data.img} alt="" className="img-fluid" />
</div>
<div className="meta-info-blog">
  <span><i className="fa fa-calendar"></i> <NavLink to={data.btn}>May 11, 2015</NavLink> </span>
  <span><i className="fa fa-tag"></i>  <NavLink to={data.btn}>News</NavLink> </span>
  <span><i className="fa fa-comments"></i> <NavLink to={data.btn}>12 Comments</NavLink></span>
</div>
<div className="blog-title">
  <h2><NavLink to={data.btn} title="">{data.blogtitl}</NavLink></h2>
</div>
<div className="blog-desc">
  <p>{data.blogpara}</p>
</div>
<div className="blog-button">
  <NavLink to={data.btn} className="hover-btn-new orange"><span>{data.blogBtn}</span></NavLink>
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

export default Blog