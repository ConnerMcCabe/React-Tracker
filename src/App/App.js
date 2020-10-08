import React from 'react';
import './App.css';
import { Cards, Chart, CountryPicker } from '../Components/';

function App() {
  return (
    <div className="App">
      <Cards />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
