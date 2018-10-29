import React, { Component } from "react";
import axios from 'axios';

class SearchWeatherForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', forecast: 'Ask Yoda the weather by submitting a city above'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const params = {city: this.state.value}
    this.yodaSpeak(params);
  }

  async yodaSpeak(params) {
      const weather = await axios.get(`http://localhost:3001/weather/${params.city}`)
      let forecastString = `The forecast is ${weather.data} in ${params.city}`
      axios.post(`http://localhost:3001/yoda/?forecast=${forecastString}`)
        .then(res => {
          this.setState({forecast: res.data});
        })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search City:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <p>{this.state.forecast}</p>
      </form>
    );
  }
}

export default SearchWeatherForm