import React, { Component } from "react";
import axios from 'axios';

class SearchWeatherForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const params = {city: this.state.value}
      
    async function yodaSpeak() {
        const weather = await axios.get(`http://localhost:3001/weather/${params.city}`)
    
        console.log(weather)
        let forecastString = `The weather is ${weather.data} in ${params.city}`
        axios.post(`http://localhost:3001/yoda/?forecast=${forecastString}`)
          .then(res => {
            console.log(res.data)
            return res.data
          })
    }

    event.preventDefault();
    yodaSpeak();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search City:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchWeatherForm