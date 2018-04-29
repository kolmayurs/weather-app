import {combineReducers} from 'redux';
import location from './location';
import currentWeather from './current-weather';
import  forcastWeather from './forcast-weather';
import ipLocation from './ip-location';

export default combineReducers({
	location,
	currentWeather,
	forcastWeather,
	ipLocation,
});