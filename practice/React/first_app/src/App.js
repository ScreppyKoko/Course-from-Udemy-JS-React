import { Component } from 'react';
import styled from 'styled-components';

import WhoAmI, { Button } from './components/test_props';

import './App.css';

const Header = () => {
  return <h2>Hey Yo</h2>
}

const Field = () => {
  const holder = 'Enter here'
  const styledField = {
    width: '300px',
    backgroundColor: 'yellow'
  }
  return <input
    type="text"
    name="test"
    id="test"
    placeholder={holder}
    style={styledField} />
}

class FieldOnClass extends Component {
  render() {
    const holder = 'Enter here'
    const styledField = {
      width: '300px',
      backgroundColor: 'blue'
    };

    return <input
      type="text"
      name="test"
      id="test"
      placeholder={holder}
      style={styledField} />
  }
}

const BigButton = styled(Button)`
  display: inline-block;
  margin: 0 auto 0 20px;
  width: 200px;
  background-color: red;
  text-align: center;
`;

function Btn() {
  // const res = () => {
  //   return 'CLICK ON ME PLEASE'
  // }
  const text = 'Log in';
  const logged = false;

  return <BigButton as='a' > {logged ? 'Enter' : text}</BigButton >
}

const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 auto;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <FieldOnClass />
      <Field />
      <Btn />
      <WhoAmI name={{ firstName: 'Shurka' }} surname={(() => { return 'Chernyshov' })} link='vk.com' />
      <WhoAmI name={{ firstName: 'Alex' }} surname={(() => { return 'Lyah' })} link='vk.com' />
    </Wrapper>
  );
}

export default App;