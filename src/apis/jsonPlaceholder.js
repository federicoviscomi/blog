import axios from 'axios';

export default axios.create({
    baseURL: 'http://jsonPlaceholder.typicode.com',
    headers: {
        "Access-Control-Allow-Origin":"*"
    }
});