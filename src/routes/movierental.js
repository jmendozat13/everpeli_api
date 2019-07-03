import { Router } from 'express'
import verify from './verifyToken'
import { createMovieRental, getMovieRental } from '../controllers/movierental.controller'
const router = Router()

router.post('/', createMovieRental)
router.get('/', verify, getMovieRental)

export default router