const express = require('express')
const router = express.Router()
const movieController = require('../app/controllers/MovieController')
const genreController = require('../app/controllers/GenreController')

router.get('/top-rate', movieController.getTopRateMovie)
router.get('/latest', movieController.getLatestMovie)
router.get('/upcoming', movieController.getUpcomingMovie)
router.get('/list', genreController.getAllGenre)
router.get('/language/:language', movieController.getMoviesByLanguage)
router.get('/genre/:genre', movieController.getMoviesByGenre)
router.get('/:id', movieController.getMovieDetail)
router.get('/', movieController.getAllMovie)

module.exports = router