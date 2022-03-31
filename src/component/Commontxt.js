import React from "react";
import {Row, Col, Container} from 'react-bootstrap'

const Common = (props) => {
  return(
    <section className="comn_txt my-5">
      <Container>
        <Row>
          <Col md='12'>
              <div className="section-title text-center">
                <h3>{props.title}</h3>
                <p className="lead">{props.para}</p>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Common;