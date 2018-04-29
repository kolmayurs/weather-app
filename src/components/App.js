import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getLocation} from '../actions/reduxActions';


function mapStateToProps(state){
  return {
    latitude: state.location.latitude,
    longitude: state.location.longitude,
    loc_loading : state.location.loading,
    loc_error: state.location.error,
  }
}

function mapDispatchToProps(dispatch){
  return {
    ...bindActionCreators({getLocation}, dispatch)
  }
}

class App extends React.Component {
  constructor(props){
    super(props);

  }

  componentWillMount(){
    this.props.getLocation();
    
}


  render() {
    if(this.props.loc_loading){
      return(<h1>loading...</h1>)
    }
    else{
       return (
      <div className="App">
        <h1>Weather App</h1>
        {this.props.latitude} <br />
        {this.props.longitude} <br /> 
      </div>
    );

    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
