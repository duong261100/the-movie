import axios from 'axios';
const url = 'http://localhost:5000/api/movie';

export default class API {
    static async getAllGenre() {
        const res = await axios.get(`${url}/list`);
        return res.data;
    }
}