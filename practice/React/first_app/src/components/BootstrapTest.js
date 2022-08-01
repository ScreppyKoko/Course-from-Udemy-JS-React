import { Container, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';


const BootstrapTest = (props) => {

   return (
      <Container>
         <Row>
            <Col>
               {props.left}
            </Col>
            <Col>
               {props.right}
            </Col>
         </Row>
      </Container>
   )
}

export default BootstrapTest;