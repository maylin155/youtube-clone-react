// utils/fetchFromAPI.js
import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const API_KEY = '08fec3b1efmsh25fd1f10c21dd51p11c662jsn8df1633ddcf9';

export const fetchFromAPI = async (endpoint) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${endpoint}`, {
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
      },
    });
    return data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    throw error;
  }
};
