const axios = require('axios').default
const URL_API = 'https://api.themoviedb.org/3'

module.exports = class API {
    // get all movie
    static async getAllGenre(req, res) {
        try {
            const resData = await axios.get(`${URL_API}/genre/movie/list?api_key=${process.env.API_KEY}`);
            const genres = resData.data;
            res.status(200).json(genres);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}