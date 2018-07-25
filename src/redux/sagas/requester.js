import axios from 'axios';

import { API } from './api';

export const Requester = axios.create({
  baseURL: `${API.BASE_URL}/${API.VERSION}`,
  timeout: 1000,
  params: {
    api_key: API.KEY
  },
});
