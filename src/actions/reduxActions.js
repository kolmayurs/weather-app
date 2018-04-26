import axios from 'axios';

export function getLocation() {
  return function(dispatch){
    const geolocation = navigator.geolocation;

    if (!geolocation) {
      dispatch({type:'GET_LOCATION_ERROR', payload: 'Not Supported', error: true })
    }
    
    geolocation.getCurrentPosition((position) => {
        dispatch({type:'GET_LOCATION', payload: position.coords});
    }, () => {
      dispatch({type:'GET_LOCATION_ERROR', payload: 'Permission denied', error: true })
    });
  }
  
};

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

