export default function forcastWeather(state={
fetching: false,
fetched: false,
data:[],
err: null
},action){
	switch(action.type){
		case 'FETCH_FORCAST_WEATHER_START' : {
			return {...state, fetching: true}
		}
		case 'FETCH_FORCAST_WEATHER_SUCCESS' : {
			return {...state, fetching: false, fetched: true, data:action.payload}
		}
		case 'FETCH_FORCAST_WEATHER_ERROR' : {
			return {...state, fetching: false, fetched: false, err:action.payload}
		}
		default: {
			return {...state}
		}
	}

}