import React from 'react';
import './App.css';
import MpxSlider from './MpxSlider';
import { Scroll } from 'lucide-react';
import ScrollableArray from './ScrollableArray';

const multipliers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function App() {
  return (
    <div style={
      {
        maxWidth:"1200px",
        width:"100%",
        height:"500px",
        margin:"0 auto",
      }
    }>
      <MpxSlider multipliers={multipliers} />
      <ScrollableArray values={multipliers} />
   </div>
  );
  }

export default App;
