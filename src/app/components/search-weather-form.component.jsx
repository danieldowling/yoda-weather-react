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
    const forcast = {forcast: ''}
    alert('A city name was submitted: ' + this.state.value);

    axios.get(`http://localhost:3001/weather/${params.city}`)
      .then(res => {
        console.log(res.data.weather[0].description)
        this.forcast = res.data.weather[0].description.toString()
        console.log(this.forcast)
      })

    event.preventDefault();
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