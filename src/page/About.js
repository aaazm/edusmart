import React from "react";
import Commonpag from '../helper/Commomprops'
import AboutSec from '../component/Aboutsec'
import Common from '../component/Commontxt'
import Aboutcomon from '../component/Aboutcommon'
const About = () => {

  return(
    <>
     <Commonpag titl='About Us' 
           content='Lorem Ipsum dolroin gravida nibh vel velit.'
   />
    <Common title='About' 
         para='Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem!'/>
         
          <AboutSec />

          <Aboutcomon />
    </>
  
  )
}

export default About;