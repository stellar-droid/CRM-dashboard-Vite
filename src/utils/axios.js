// copyright : ESDS Software Solution Ltd. All Rights Reserved
// author : Lokesh
// version : 4.0
// maintainer : Lokesh Wani




// create a interceptor to handle the request and response
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://172.16.21.29:30001',
    // timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;


instance.interceptors.request.use(
    (config) => {
        console.log('Request was sent');
        return config;
    },
    (error) => {
        console.log('Request error');
        return Promise.reject(error);
    }
);


