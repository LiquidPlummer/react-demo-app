import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar-component';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('Name');
  const [message, setMessage] = useState('Message');

  let propsObject = {
    name: name,
    message: message,
    updateName: setName,
    updateMessage: setMessage
  }

  return (
    <>
      <Navbar {...propsObject}/>
    </>
  );
}

export default App;
