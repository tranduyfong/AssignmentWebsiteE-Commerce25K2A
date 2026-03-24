import axios from "axios";

// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL
});

// ALter defaults after instance has been created
//  instance.defaults.headers.common['Authorization'] = AUTH_TOKEN

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = localStorage.getItem("access_token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
}, function (error) {
    // Do something with request error
    // return Promise.reject(error);
    if (error.response.status === 401) {
        localStorage.removeItem("access_token");
        // window.location.href = "/login";
    }
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function
    // Do something with response data
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function
    // Do somehting with response error
    if (error.response && error.response.data) return error.response.data;
    return Promise.reject(error);
})
export default instance;