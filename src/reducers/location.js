export default function location(state = {
 coords: [],
 error: null
}, action){
  switch(action.type) {
  case 'GET_LOCATION': {
      return {...state,coords: action.payload}
    }
    case 'GET_LOCATION_ERROR':{
        return {...state, error: action.payload}
      }
  default:{
    return {...state}
  }
  }
}