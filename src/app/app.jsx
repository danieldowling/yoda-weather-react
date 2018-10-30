import React from 'react';
import ReactDOM from 'react-dom';
import SearchWeatherForm from './components/search-weather-form.component';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    render() {
        return (<div>
            <SearchWeatherForm />               
        </div>);
    }
};

ReactDOM.render(<App />, document.getElementById("app"));