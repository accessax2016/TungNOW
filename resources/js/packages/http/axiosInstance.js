import Axios from "axios";
import app from '../../app';

const axiosInstance = Axios.create();

let numberOfRequest = 0;

axiosInstance.interceptors.request.use(config => {
    app.$spinner.show();
    numberOfRequest++;
    return config;
});

axiosInstance.interceptors.response.use(response => {
    numberOfRequest--;
    if (numberOfRequest === 0) {
        app.$spinner.hide();
    }
    return response;
});

export default axiosInstance;