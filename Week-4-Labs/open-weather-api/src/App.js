import './App.css';
import React from 'react';
import Weather from './components/Weather';

const App = () => {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <h4>Data provided by the Open Weather API...</h4>
      <Weather />
    </div>
  );
};

export default App;
