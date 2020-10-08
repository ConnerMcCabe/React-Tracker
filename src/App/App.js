import React from 'react';
import './App.css';
import Cards from '../Components/Cards/Cards'
import Chart from '../Components/Chart/Chart'
import CountryPicker from '../Components/CountryPicker/CountryPicker'

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
