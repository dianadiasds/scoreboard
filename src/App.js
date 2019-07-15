import React from 'react';
import './App.css';
import Title from './components/Title'
import LightSwitch from './components/LightSwitch'
import User from './components/User'

function App() {
  return (
    <div className="App">
      <main>
        <Title content="Some Simple Title" />
        <LightSwitch />
        <User name="Jair" />
        <User name="Olavo" />
      </main>
    </div>
  );
}

export default App;
