import axios from "axios";

const Axios = axios.create({
  baseURL: 'http://192.168.0.112:8000/api/v1/',

  headers: {'X-Custom-Header': 'foobar',
  'Content-Type': 'application/x-www-form-urlencoded'}
});

Axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers.Authorization = localStorage.getItem('token')
     
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
Axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("hello")
    return Promise.reject(error);
  });

  export default Axios