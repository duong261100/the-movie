export default class API {
    static async getAllMovie(axios) {
        const res = await axios.get('/api/movie');
        return res.data;
    }

    static async getNowPlayingMovie(axios) {
        const res = await axios.get('/api/movie/now_playing');
        return res.data.results;
    }

    static async getTopRateMovie(axios) {
        const res = await axios.get('/api/movie/top-rate');
        return res.data;
    }

    static async getLatestMovie(axios) {
        const res = await axios.get('/api/movie/latest');
        return res.data;
    }

    static async getUpcomingMovie(axios) {
        const res = await axios.get('/api/movie/upcoming');
        return res.data;
    }

    static async getMovieDetail(axios, id) {
        const res = await axios.get(`/api/movie/${id}`);
        return res.data;
    }

    static async getMoviesByLanguage(axios, language) {
        const res = await axios.get(`/api/movie/language/${language}`);
        return res.data;
    }

    static async getMoviesByGenre(axios, genre) {
        const res = await axios.get(`/api/movie/genre/${genre}`);
        return res.data;
    }
}