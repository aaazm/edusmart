import {useState} from 'react'
import {Modal, Button, Tab, Tabs, Row, Col} from 'react-bootstrap';
import {NavLink} from "react-router-dom";
const Model = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button  className='login_b' onClick={handleShow}>
      <span>Book Now</span>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='mb-0'>
         <p>Customer Login</p>
        </Modal.Header>
        <Modal.Body className='customer-box'>
        <Tabs
          defaultActiveKey="Login"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
  <Tab eventKey="Login" title="Login">
  <form role="form" className="form-horizontal">
							<div className="form-group">
								<Col md='12'>
									<input className="form-control" id="email1" placeholder="Name" type="text" />
								</Col>
							</div>
							<div className="form-group">
								<Col md='12'>
									<input className="form-control" id="exampleInputPassword1" placeholder="Email" type="email" />
								</Col>
							</div>
							<div className="row">
								<Col md='10'>
									<button type="submit" className="btn btn-light btn-radius btn-brd grd1">
										Submit
									</button>
									<a className="for-pwd" href="javascript:;">Forgot your password?</a>
								</Col>
							</div>
						</form>
  </Tab>
  <Tab eventKey="profile" title="Registration">
  <form role="form" className="form-horizontal">
							<div className="form-group">
								<Col md='12'>
									<input className="form-control" placeholder="Name" type="text" />
                  </Col>
							</div>
							<div className="form-group">
								<Col md='12'>
									<input className="form-control" id="email" placeholder="Email" type="email" />
                  </Col>
							</div>
							<div className="form-group">
								<Col md='12'>
									<input className="form-control" id="mobile" placeholder="Mobile" type="email" />
                  </Col>
							</div>
							<div className="form-group">
								<Col md='12'>
									<input className="form-control" id="password" placeholder="Password" type="password" />
                  </Col>
							</div>
							<Row>						
								<Col md='12'>
									<button type="button" className="btn btn-light btn-radius btn-brd grd1">
										Save &amp; Continue
									</button>
									<button type="button" className="btn btn-light btn-radius btn-brd grd1" onClose={handleClose}>
										Cancel</button>
                    </Col>
							</Row>
						</form>
  </Tab>
</Tabs>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Model;