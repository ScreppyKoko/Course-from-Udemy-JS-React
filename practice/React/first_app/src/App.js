import './App.css';
import {Component, StrictMode} from 'react';

const Header = () => {
  return <h2>Hey Yo</h2>
} 

const Field = () => {
  const holder = 'Enter here'
  const styledField = {
    width: '300px',
    backgroundColor: 'lime'
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
      backgroundColor: 'red'
    };

    return <input 
    type="text" 
    name="test" 
    id="test" 
    placeholder={holder} 
    style={styledField} />
  }
}

function Btn() {
  // const res = () => {
  //   return 'CLICK ON ME PLEASE'
  // }
  const text = 'Log in';
  const logged = false;


  return <button>{logged ? 'Enter' : text}</button>
} 

function App() {
  return (
    <div className="App">
      <Header/>
      <FieldOnClass/>
      <Btn/>
    </div>
  );
}

export default App;