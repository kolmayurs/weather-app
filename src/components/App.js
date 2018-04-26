import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getLocation, fetchCurrentWeather, fetchForcastWeather} from '../actions/reduxActions';

function mapStateToProps(state){
  return {location: [state.location.coords],
    test: state.location.coords }
}

function mapDispatchToProps(dispatch){
  return {
    ...bindActionCreators({getLocation}, dispatch)
  }
}

class App extends React.Component {
  constructor(props){
    super(props);

    this.weather =this.weather.bind(this);
  }

  componentDidMount(){
    this.props.getLocation();
        console.log('locations: ' + this.props.location);
      /*  this.props.fetchCurrentWeather(this.props.test.latitude,this.props.test.latitude);
          this.props.fetchForcastWeather(this.props.test.latitude,this.props.test.latitude);*/
    //console.log(this.props.location);
  }

  weather(lat,lon){
          /*this.props.fetchCurrentWeather(lat,lon);
          this.props.fetchForcastWeather(lat,lon)*/
                      //<button onClick={this.weather.bind(this,items.latitude,items.longitude)}>get Weather</button>
  }
  render() {
      const loc = this.props.location.map(items => {
         /*this.props.fetchCurrentWeather(items.latitude,items.longitude);
          this.props.fetchForcastWeather(items.latitude,items.longitude)*/
      return(
          <div key={'loc_'+items}>
            <div>Latitude: {items.latitude}</div>
            <div>Longitue: {items.longitude}</div>

          </div>
        )
    });

    

    return (
      <div className="App">
        <h1>Weather App</h1>
        {loc}
      </div>
    );

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
