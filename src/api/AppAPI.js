import axios from 'axios';

const BASE_URL = 'http://localhost:3004/';

const appApi = axios.create({
  baseURL: BASE_URL
});

export default appApi;
