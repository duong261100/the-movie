export default class API {
    static async getAllGenre(axios) {
        const res = await axios.get('/api/movie/list');
        return res.data;
    }
}