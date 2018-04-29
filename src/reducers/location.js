export default function location(state = {
  loading:false,
 latitude: 0,
 longitude: 0,
 error: null
}, action){
  switch(action.type) {
    case 'GET_LOCATION_START': {
      return {...state,loading: true}
    }
  case 'GET_LOCATION': {
      return {...state,loading: false,latitude: action.latitude,longitude: action.longitude}
    }
    case 'GET_LOCATION_ERROR':{
        return {...state, loading: false, error: action.payload}
      }
  default:{
    return {...state}
  }
  }
}