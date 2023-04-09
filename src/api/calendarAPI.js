import axios from 'axios';
import { getEnvVaribales } from '../helpers';

const { VITE_API_URL } = getEnvVaribales();

const calendarAPI = axios.create({
    baseUrl: VITE_API_URL
});

// TODO: Configurar interceptores de axios

export default calendarAPI;
