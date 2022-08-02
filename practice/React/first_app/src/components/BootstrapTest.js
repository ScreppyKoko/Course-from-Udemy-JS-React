import { Container, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';

import Form from './BootstrapFormTestRefs';
import FormPortal from './BootstrapFormTestPortal';


const BootstrapTest = (props) => {

   return (
      <Container>
         <FormPortal/>
         <Row>
            <Col>
               {props.left}
            </Col>
            <Col>
               {props.right}
            </Col>
         </Row>
         <Form/>
      </Container>
   )
}

export default BootstrapTest;