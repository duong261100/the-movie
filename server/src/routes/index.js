const movieRouter = require('./movie')
const searchRouter = require('./search')

function route(app) {
    app.use('/api/movie', movieRouter)
    app.use('/api/search/movie', searchRouter)
}

module.exports = route