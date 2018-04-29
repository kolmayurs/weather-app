import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchCurrentWeather, fetchForcastWeather} from '../actions/reduxActions';

function mapStateToProps(state){
  return {
    cur_loading: state.currentWeather.fetching,
    cur_data: [state.currentWeather.data],
    for_loading: state.forcastWeather.fetching,
    for_data: state.forcastWeather.data,
  }
}

function mapDispatchToProps(dispatch){
  return {
    ...bindActionCreators({fetchCurrentWeather, fetchForcastWeather}, dispatch)
  }
}

class App extends React.Component {
  constructor(props){
    super(props);

    this.weather =this.weather.bind(this);
  }



componentWillReciveProps(nextProps) {
  if (this.props.lat !== nextProps.lat || this.props.lon !== nextProps.lon) {
    this.weather();
  }
}


  weather(){
          this.props.fetchCurrentWeather(this.props.lat,this.props.lon);
          this.props.fetchForcastWeather(this.props.lat,this.props.lon);
  }
  render() {
    if(this.props.loc_loading || this.props.cur_loading || this.props.loc_loading){
      return(<h1>loading...</h1>)
    }

    const cur_weather = this.props.cur_data((data, i) =>{
      return(
        <div key={'cur_weather_'+i}>
          <div>{data.name}</div>

        </div>
      )
    });

    return (
      <div className="App">
        {cur_weather}
      </div>
    );

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
