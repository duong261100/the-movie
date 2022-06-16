export default class API {
    static async searchMoviesByName(axios, name) {
        const res = await axios.get(`/api/search/movie/${name}`);
        return res.data;
    }
}