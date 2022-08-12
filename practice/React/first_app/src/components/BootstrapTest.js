import { Container, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';

import FormRefs from './FormTestRefs';
import FormPortal from './FormTestPortal';


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
         <FormRefs/>
      </Container>
   )
}

export default BootstrapTest;