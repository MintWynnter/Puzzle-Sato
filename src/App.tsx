import React, { useState } from 'react';
import './App.css';
import { Board } from './Components/Board';
import { Button } from 'react-bootstrap';
import { DPad } from './Components/DPad';
import { square } from './Interfaces/Square';

function App() {
  const [pco, setpco] = useState<[number, number]>([0, 0]);
  const [size, setsize] = useState<[number, number]>([5, 5]);
  const base: square = {
    moveable: false,
    type: "a",
    slide: false,
    melt: false,
    gothrough: true
  }
  const plyr: square = {
    moveable: false,
    type: "p",
    slide: false,
    melt: false,
    gothrough: true
  }
  const blck: square = {
    moveable: false,
    type: "b",
    slide: false,
    melt: false,
    gothrough: true
  }
  const [b, setb] = useState<square[]>([plyr, base, base, base, base, base, base, blck, base, base, base, base, base, base, base, base, base, base, base, base, base, base, base, base, base]);
  return (
    <div className="App">
      <span>{pco}</span>
      <Board size={size} coords={pco} board={b}></Board>
      <DPad size={size} coords={pco} setpco={setpco} board={b} setboard={setb}></DPad>
    </div>
  );
}

export default App;
