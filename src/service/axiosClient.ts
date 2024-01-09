import axios from 'axios';

// BASE_URL should be environmental variable in production.
const BASE_URL = 'https://fakestoreapi.com/';

const axiosClient = axios.create({ baseURL: BASE_URL });

export default axiosClient;
