import axios from 'axios';

const instance = axios.create({
    baseURL: "https://my-burger-9309.firebaseio.com/",
});

export default instance;