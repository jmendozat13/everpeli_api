import { Router } from 'express'
import { createMovieRental, getMovieRental } from '../controllers/movierental.controller'
const router = Router()

router.post('/', createMovieRental)
router.get('/', getMovieRental)
export default router