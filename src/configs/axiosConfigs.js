import axios from 'axios';

const instance = axios.create({
    // baseURL: 'https://restaurant-web-1667d-default-rtdb.firebaseio.com/',
    // headers: { 'Content-Type': 'text/plain' },
});
export default instance;
