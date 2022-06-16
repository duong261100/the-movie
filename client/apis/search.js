import axios from 'axios';
const url = 'http://localhost:5000/api/search/movie';

export default class API {
    static async searchMoviesByName(name) {
        const res = await axios.get(`${url}/${name}`);
        return res.data;
    }
}