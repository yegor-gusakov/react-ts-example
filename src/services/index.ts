import { ApiService } from './ApiService';

const BASE_URL = `http://localhost:9000/api`;

export const apiService = ApiService.createApiService(BASE_URL);

