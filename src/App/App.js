import React from 'react';
import './App.css';
import { Cards, Chart, CountryPicker } from '../Components/';
import { fetchData } from '../api';

class App extends React.Component {
  state = {
    data: {},
    country: ''
  }
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    console.log(country)
  }

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart />
      </div>
    )
  }
}




export default App;
