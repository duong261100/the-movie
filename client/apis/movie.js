import axios from 'axios';
const url = 'http://localhost:5000/api/movie';

export default class API {
    static async getAllMovie() {
        const res = await axios.get(url);
        return res.data;
    }

    static async getNowPlayingMovie() {
        const res = await axios.get(`${url}/now_playing`);
        return res.data.results;
    }

    static async getTopRateMovie() {
        const res = await axios.get(`${url}/top-rate`);
        return res.data;
    }

    static async getLatestMovie() {
        const res = await axios.get(`${url}/latest`);
        return res.data;
    }

    static async getUpcomingMovie() {
        const res = await axios.get(`${url}/upcoming`);
        return res.data;
    }

    static async getMovieDetail(id) {
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }

    static async getMoviesByLanguage(language) {
        const res = await axios.get(`${url}/language/${language}`);
        return res.data;
    }

    static async getMoviesByGenre(genre) {
        const res = await axios.get(`${url}/genre/${genre}`);
        return res.data;
    }
}