import React, { useState } from 'react';
import './App.css';
import { Board } from './Components/Board';
import { Button } from 'react-bootstrap';
import { DPad } from './Components/DPad';

function App() {
  const [pco, setpco] = useState<[number, number]>([0, 1]);
  const [size, setsize] = useState<[number, number]>([3, 3]);
  const [b, setb] = useState<string[]>(["a", "a", "a", "p", "a", "a", "a", "a", "a"]);
  return (
    <div className="App">
      <span>{pco}</span>
      <Board size={size} coords={pco} board={b}></Board>
      <DPad size={size} coords={pco} setpco={setpco} board={b} setboard={setb}></DPad>
    </div>
  );
}

export default App;
