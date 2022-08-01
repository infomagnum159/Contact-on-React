import axios from "axios";

const axiosApi = axios.create ({
    baseURL: 'https://burgerakbar-js14-default-rtdb.europe-west1.firebasedatabase.app'
});

export default axiosApi;