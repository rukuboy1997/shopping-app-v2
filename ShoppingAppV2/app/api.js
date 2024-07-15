import axios from 'axios';

const API_URL = 'https://api.timbu.cloud'; // Corrected API base URL
const Apikey = 'c786fc632a42416594307902911a9f4b20240706155006450683'; // Replace with your actual API key
const Appid = 'D6UNUV8U0JK6NMR'; // Replace with your actual APP ID
const ORGANIZATION_ID = 'b6009d66852947308b845fe20776ce85'; // Replace with your actual organization ID

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${Apikey}`, // Add the API key to the authorization header
  },
  timeout: 10000 // Set a timeout of 10 seconds
});

export const getProducts = async () => {
  try {
    const response = await api.get('/products', {
      params: {
        organization_id: ORGANIZATION_ID,
        reverse_sort: false,
        page: 1,
        size: 10,
        Appid: Appid,
	Apikey: Apikey,
      }
    });
    return response.data.items; // Adjusted to return the items array
  } catch (error) {
    if (error.response) {
      console.error('Error response:', error.response.data);
      console.error('Error status:', error.response.status);
      console.error('Error headers:', error.response.headers);
    } else if (error.request) {
      console.error('Error request:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
    throw error;
  }
};
