import './App.css';
import {Component} from 'react';
import WhoAmI from './components/test_props';

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
      <Field/>
      <Btn/>
      <WhoAmI name={{firstName: 'Shurka'}} surname={(() => {return 'Chernyshov'})} link='vk.com'/>
      <WhoAmI name={{firstName: 'Alex'}} surname={(() => {return 'Lyah'})} link='vk.com'/>
    </div>
  );
}

export default App;