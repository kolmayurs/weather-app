export default function currentWeather(state={
fetching: false,
fetched: false,
data:[],
err: null
},action){
	switch(action.type){
		case 'FETCH_CURRENT_WEATHER_START' : {
			return {...state, fetching: true}
		}
		case 'FETCH_CURRENT_WEATHER_SUCCESS' : {
			return {...state, fetching: false, fetched: true, data:action.payload}
		}
		case 'FETCH_CURRENT_WEATHER_ERROR' : {
			return {...state, fetching: false, fetched: false, err:action.payload}
		}
		default: {
			return {...state}
		}
	}

}