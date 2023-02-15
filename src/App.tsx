import React, { useState } from 'react';
import './App.css';
import { Board } from './Components/Board';
import { Button } from 'react-bootstrap';
import { DPad } from './Components/DPad';

function App() {
  const [pco, setpco] = useState<[number, number]>([0, 0]);
  const [size, setsize] = useState<[number, number]>([5, 5]);
  return (
    <div className="App">
      <span>{pco}</span>
      <Board size={size} coords={pco}></Board>
      <DPad size={size} coords={pco} setpco={setpco}></DPad>
    </div>
  );
}

export default App;
