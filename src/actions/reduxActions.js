import axios from 'axios';

export function getLocation() {
  return function(dispatch){
    dispatch({type:'GET_LOCATION_START'})
    const geolocation = navigator.geolocation;
    if (!geolocation) {
      dispatch({type:'GET_LOCATION_ERROR', payload: 'Not Supported' })
       axios.get('http://ip-api.com/json')
    .then(res => {
      dispatch({type: 'FETCH_IP_LOCATION_SUCCESS', payload: res.data})
    })
    .catch(err => {
      dispatch({type: 'FETCH_IP_LOCATION_ERROR', payload: err})
    })
    }
    
    geolocation.getCurrentPosition((position) => {
        dispatch({type:'GET_LOCATION', latitude: position.coords.latitude, longitude: position.coords.longitude})
        dispatch({type: 'FETCH_CURRENT_WEATHER_START'})
    axios.get('http://api.openweathermap.org/data/2.5/weather?lat='+position.coords.latitude+'&lon='+position.coords.longitude+'&appid=8124a644a4fab4b5c77b5fc1ae5ba6c5')
    .then(res => {
      dispatch({type: 'FETCH_CURRENT_WEATHER_SUCCESS', payload: res.data})
    })
    .catch(err => {
      dispatch({type: 'FETCH_CURRENT_WEATHER_ERROR', payload: err})
    })
        dispatch({type: 'FETCH_FORCAST_WEATHER_START'})
    axios.get('http://api.openweathermap.org/data/2.5/forecast?lat='+position.coords.latitude+'&lon='+position.coords.longitude+'&appid=8124a644a4fab4b5c77b5fc1ae5ba6c5')
    .then(res => {
      dispatch({type: 'FETCH_FORCAST_WEATHER_SUCCESS', payload: res.data})
    })
    .catch(err => {
      dispatch({type: 'FETCH_FORCAST_WEATHER_ERROR', payload: err})
    })
    }, () => {
      dispatch({type:'GET_LOCATION_ERROR', payload: 'Permission denied'})
       axios.get('http://ip-api.com/json')
    .then(res => {
      dispatch({type: 'FETCH_IP_LOCATION_SUCCESS', payload: res.data})
    })
    .catch(err => {
      dispatch({type: 'FETCH_IP_LOCATION_ERROR', payload: err})
    })
    });
  }
  
};

/*export function getLocation(){
  return function(dispatch){
  let startPos;
  let geoOptions = {
    enableHighAccuracy: true
  }

  let geoSuccess = function(position) {
    startPos = position;
    dispatch({type:'GET_LOCATION', payload: startPos.coords})
  let geoError = function(error) {
    dispatch({type:'GET_LOCATION_ERROR', payload: error})
    //console.log('Error occurred. Error code: ' + error.code);
    // error.code can be:
    //   0: unknown error
    //   1: permission denied
    //   2: position unavailable (error response from location provider)
    //   3: timed out
  }

  navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
}
}
}*/
export function ipLocation(){
  return function(dispatch){
    dispatch({type: 'FETCH_IP_LOCATION_START'})
    axios.get('http://ip-api.com/json')
    .then(res => {
      dispatch({type: 'FETCH_IP_LOCATION_SUCCESS', payload: res.data})
    })
    .catch(err => {
      dispatch({type: 'FETCH_IP_LOCATION_ERROR', payload: err})
    })
  }
}


export function fetchCurrentWeather(lat, lon){
  return function(dispatch){
    dispatch({type: 'FETCH_CURRENT_WEATHER_START'})
    axios.get('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=8124a644a4fab4b5c77b5fc1ae5ba6c5')
    .then(res => {
      dispatch({type: 'FETCH_CURRENT_WEATHER_SUCCESS', payload: res.data})
    })
    .catch(err => {
      dispatch({type: 'FETCH_CURRENT_WEATHER_ERROR', payload: err})
    })
  }
}

export function fetchForcastWeather(lat, lon){
  return function(dispatch){
    dispatch({type: 'FETCH_FORCAST_WEATHER_START'})
    axios.get('http://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&appid=8124a644a4fab4b5c77b5fc1ae5ba6c5')
    .then(res => {
      dispatch({type: 'FETCH_FORCAST_WEATHER_SUCCESS', payload: res.data})
    })
    .catch(err => {
      dispatch({type: 'FETCH_FORCAST_WEATHER_ERROR', payload: err})
    })
  }
}

