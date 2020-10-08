import React from 'react';
import './App.css';
import { Cards, Chart, CountryPicker } from '../Components/';
import { fetchData } from '../api';

class App extends React.Component {

  async componentDidMount() {
    const data = await fetchData();
    console.log(data)
  }

  render() {
    return (
      <div className="App">
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}




export default App;
