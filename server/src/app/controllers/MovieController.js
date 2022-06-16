const axios = require('axios').default
const URL_API = 'https://api.themoviedb.org/3'

module.exports = class API {
    // get all movie
    static async getAllMovie(req, res) {
        try {
            const resData = await axios.get(`${URL_API}/movie/now_playing?api_key=${process.env.API_KEY}`);
            const movies = resData.data.results;
            res.status(200).json(movies);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    // get top rate movie
    static async getTopRateMovie(req, res) {
        try {
            const resData = await axios.get(`${URL_API}/movie/top_rated?api_key=${process.env.API_KEY}`);
            const movies = resData.data.results;
            res.status(200).json(movies);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    // get latest movie
    static async getLatestMovie(req, res) {
        try {
            var today = new Date();
            today.setMonth(today.getMonth() - 1);
            today = today.toJSON().slice(0, 10);
            const resData = await axios.get(`${URL_API}/discover/movie?api_key=${process.env.API_KEY}&primary_release_date.gte=${today}`);
            const movies = resData.data.results;
            res.status(200).json(movies);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    // get upcoming movie
    static async getUpcomingMovie(req, res) {
        try {
            const resData = await axios.get(`${URL_API}/movie/upcoming?api_key=${process.env.API_KEY}`);
            const movies = resData.data.results;
            res.status(200).json(movies);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    // get details of movie
    static async getMovieDetail(req, res) {
        const id = req.params.id;
        try {
            const resData = await axios.get(`${URL_API}/movie/${id}?api_key=${process.env.API_KEY}`);
            const movies = resData.data;
            res.status(200).json(movies);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    // get movies by language
    static async getMoviesByLanguage(req, res) {
        try {
            const resData = await axios.get(`${URL_API}/discover/movie?api_key=${process.env.API_KEY}&language=${req.params.language}`);
            const movies = resData.data.results;
            res.status(200).json(movies);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    // get movies by genre
    static async getMoviesByGenre(req, res) {
        try {
            const resData = await axios.get(`${URL_API}/discover/movie?api_key=${process.env.API_KEY}&with_genres=${req.params.genre}`);
            const movies = resData.data.results;
            res.status(200).json(movies);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}