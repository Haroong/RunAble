import axios from 'axios';
import { OPEN_WEATHER_API_KEY } from '../config/config';

const key = OPEN_WEATHER_API_KEY;

export const getWeather = (lat, lon) => {
  const parameter = `lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
  const url = `api.openweathermap.org/data/2.5/weather?${parameter}`;
  return axios.get(url);
};
