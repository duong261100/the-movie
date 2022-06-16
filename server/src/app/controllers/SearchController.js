const axios = require('axios').default
const URL_API = 'https://api.themoviedb.org/3/search/movie'

module.exports = class API {
    // search movie by name
    static async searchMovieByName(req, res) {
        try {
            const resData = await axios.get(`${URL_API}?api_key=${process.env.API_KEY}&query=${req.params.name}`);
            const movies = resData.data.results;
            res.status(200).json(movies);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}