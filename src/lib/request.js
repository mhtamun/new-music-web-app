import axios from 'axios';

axios.interceptors.request.use((config) => {
    return config;
});

axios.interceptors.response.use((response) => {
    console.log('Response: ' + JSON.stringify(response.data));
    return response.data;
}, (error) => {
    console.log('Response: ' + JSON.stringify(error.response.data));
    return error.response.data;
});

export const get = async (endpoint) => axios.get(endpoint);
