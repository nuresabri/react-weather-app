import axios from 'axios';

const API_KEY = "271e962494msh580c3ec98263ee5p15b9c5jsnc261d9679095";
console.log(API_KEY);
export async function getWeatherData(
    endpoint, 
    place_id, 
    measurementSystem) 
    {
        const options = {
          method: 'GET',
          url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
          params: {
            place_id,
            language: 'en',
            units: measurementSystem
          },
          headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
          }
        };
        
        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.error(error);
        }
}

export async function searchPlaces(text) {
  const options = {
    method: 'GET',
    url: 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places',
    params: {
      text: text,
      language: 'en'
    },
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

