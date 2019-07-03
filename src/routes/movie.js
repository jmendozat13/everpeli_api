import { Router } from 'express';
const router = Router()
import Movie from '../models/Movie';
import verify from './verifyToken';
import { registerMovieValidation } from '../validation';

router.post('/', verify, async (req, res) => {
    const {
        backdrop_path,
        poster_path,
        original_title,
        overview } = req.body;

    try {
        const { error } = registerMovieValidation(req.body)
        if (error) return res.status(400).send(error.details[0].message)

        const movieExist = await Movie.findOne({ original_title: original_title })
        if (movieExist) return res.status(400).send('Original_title already exists')

        const movie = new Movie({
            backdrop_path: backdrop_path,
            poster_path: poster_path,
            original_title: original_title,
            overview: overview
        })

        const saveMovie = await movie.save()
        res.json(saveMovie)
    } catch (err) {
        res.status(500).json({ message: err })
    }
})

router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies)
    } catch (err) {
        res.status(500).json({ message: error })
    }
})

export default router