import axios from 'axios';

// Set the base URL of your backend API
const api = axios.create({
  baseURL: 'http://localhost:8089', // Replace with your backend URL
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
});

// Example GET request
export const fetchLawData = async () => {
  try {
    const response = await api.get('/laws'); // Endpoint to fetch data
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const fetchSectionData = async (law_id) => {
    try {
    const url = `/sections/${law_id}`;
    console.log(url);
      const response = await api.get(url); // Endpoint to fetch data
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

// Example POST request
export const postData = async (data) => {
  try {
    const response = await api.post('/data', data); // Endpoint to post data
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};