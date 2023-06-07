import './App.css';
import React, { useState } from 'react';


function App() {
  const [number, setNumber] = useState(0);

  const incrementNumber = () => {
    setNumber(number + 1);
  };

  const decrementNumber = () => {
    setNumber(number - 1);
  };

  return (
    <div className="App">
      <h1>Number: {number}</h1>
      <button className="BtnSpace" onClick={decrementNumber}>Decrement</button>
      <button className="BtnSpace" onClick={incrementNumber}>Increment</button>
      
    </div>
  );
}

export default App;