import React, { Component } from 'react';

import WhoAmI, { Button } from './components/test_props';
import BootstrapTest from './components/BootstrapTest';

import styled from 'styled-components';
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
  width: 1200px;
  margin: 80px auto 0 auto;
`;

const DynamicGreating = (props) => {
  return (
    <div className={'mb-3 p-3 border border-' + props.color}>
      {
        React.Children.map(props.children, child => {
          return React.cloneElement(child, { className: "shadow p-3 m-3 border rounded" })
        })
      }
    </div>
  )
}

const HelloGreatings = () => {
  return (
    <div style={{ 'width': '600px', 'margin': '0 auto' }}>
      <DynamicGreating color={'primary'}>
        <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
      </DynamicGreating>
    </div>
  )
}

const Message = (props) => {
  return (
    <h2>The counter is ({props.counter})</h2>
  )
}

class Counter extends Component {
  state = {
    counter: 0
  }

  changeCounter = () => {
    this.setState(({counter}) => ({
      counter: counter + 1
    }))
  }

  render () {
    return (
      <>
      <button 
        className={'btn btn-primary'}
        onClick = {this.changeCounter}>
        Click me
      </button>
      {this.props.render(this.state.counter)}
      </>
    )
  }
}

function App() {
  return (
    <Wrapper>

      <Header />
      <Counter render={counter => (
        <Message counter={counter}/>
      )}/>
      <FieldOnClass />
      <Field />
      <Btn />
      <WhoAmI name={{ firstName: 'Shurka' }} surname={(() => { return 'Chernyshov' })} link='vk.com' />
      <WhoAmI name={{ firstName: 'Alex' }} surname={(() => { return 'Lyah' })} link='vk.com' />
      <BootstrapTest
        left={
          <DynamicGreating color={'primary'}>
            <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
            <h3>Odio laudantium ad odit fugiat ipsa maiores, eum cupiditate voluptas assumenda repudiandae.</h3>
          </DynamicGreating>
        }
        right={
          <DynamicGreating color={'primary'}>
            <h2>SUCCESSFULLY.</h2>
          </DynamicGreating>
        }
      />
      <HelloGreatings />
    </Wrapper>
  );
}

export default App;