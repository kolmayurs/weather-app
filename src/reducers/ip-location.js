export default function ipLocation(state={
fetching: false,
fetched: false,
data:[],
err: null
},action){
	switch(action.type){
		case 'FETCH_IP_LOCATION_START' : {
			return {...state, fetching: true}
		}
		case 'FETCH_IP_LOCATION_SUCCESS' : {
			return {...state, fetching: false, fetched: true, data:action.payload}
		}
		case 'FETCH_IP_LOCATION_ERROR' : {
			return {...state, fetching: false, fetched: false, err:action.payload}
		}
		default: {
			return {...state}
		}
	}

}