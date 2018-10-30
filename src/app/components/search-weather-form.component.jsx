import React, { Component } from "react";
import axios from 'axios';
import '../styles/search-weather-form.css';

class SearchWeatherForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', forecast: 'Ask Yoda the weather forcast by entering a city'};

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
      <div className="jumbotron">
      <div className="container">
        <div className="card">
          <img className="card-img-top" src="/src/app/images/yoda.jpg" alt="Card image cap"></img>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
            <p>{this.state.forecast}</p>
              <div className="input-group mb-3">
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </div>
              <div>
                <input className="btn btn-outline-secondary" type="submit" value="Yoda Forecast" />
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default SearchWeatherForm