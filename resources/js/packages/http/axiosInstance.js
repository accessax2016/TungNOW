import Axios from "axios";
import app from '../../app';

const axiosInstance = Axios.create();

let numberOfRequest = 0;

axiosInstance.interceptors.request.use(config => {
    app.$spinner.show();
    numberOfRequest++;
    return config;
}, (error) => {
    app.$spinner.show();
    numberOfRequest++;
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(response => {
    numberOfRequest--;
    if (numberOfRequest === 0) {
        app.$spinner.hide();
    }
    return response;
}, (error) => {
    numberOfRequest--;
    if (numberOfRequest === 0) {
        app.$spinner.hide();
    }
    return Promise.reject(error);
});

export default axiosInstance;