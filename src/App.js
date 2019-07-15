import React from 'react';
import './App.css';
import Title from './components/Title';
import LightSwitch from './components/LightSwitch';
import UserBoard from "./components/UserBoard";

function App() {
  return (
    <div className="App">
      <main>
        <Title content="Some Simple Title" />
        <LightSwitch />
        <h1>User Board</h1>
        <UserBoard />
      </main>
    </div>
  );
}

export default App;
