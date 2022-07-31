import { Container, Row, Col, Button, Modal, Carousel } from 'react-bootstrap';
import React, { useState } from 'react';


const BootstrapTest = () => {

   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   return (
      <Container>
         <Row>
            <Col>
               <Button variant="primary" onClick={handleShow}>
                  Launch demo modal
               </Button>

               <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                     <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                  <Modal.Footer>
                     <Button variant="secondary" onClick={handleClose}>
                        Close
                     </Button>
                     <Button variant="primary" onClick={handleClose}>
                        Save Changes
                     </Button>
                  </Modal.Footer>
               </Modal>
            </Col>
            <Col>
               <Carousel fade>
                  <Carousel.Item>
                     <img
                        className="d-block w-100"
                        src="https://pic.rutubelist.ru/video/eb/f8/ebf8d86ddd388ef643c195927b2be660.jpg"
                        alt="First slide"
                     />
                     <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                     </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                     <img
                        className="d-block w-100"
                        src="https://n1s1.elle.ru/48/7b/36/487b36300c62c5f0cb905da52aa874b4/728x486_1_30b570c2f6c0da65bb56095068e05768@940x627_0xc0a839a4_18087198581488362059.jpeg "
                        alt="Second slide"
                     />

                     <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                     </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                     <img
                        className="d-block w-100"
                        src="https://cs11.pikabu.ru/post_img/2019/02/04/12/1549312329147951618.jpg"
                        alt="Third slide"
                     />

                     <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                           Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                     </Carousel.Caption>
                  </Carousel.Item>
               </Carousel>
            </Col>
            <Col>3 of 3</Col>
         </Row>
      </Container>
   )
}

export default BootstrapTest;