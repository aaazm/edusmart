import React from 'react'


const Commonpag = (props) => {
  return(
      <>
        	<div class="all-title-box">
		<div class="container text-center">
    {/* <h1>About Us<span class="m_1">Lorem Ipsum dolroin gravida nibh vel velit.</span></h1> */}
			<h1>{props.titl}<span class="m_1">{props.content}</span></h1>
		</div>
	</div>
      </>
  )
}

export default Commonpag;