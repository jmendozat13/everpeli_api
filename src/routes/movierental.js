import { Router } from 'express'
import { createMovieRental } from '../controllers/movierental.controller'
const router = Router()

router.get('/', createMovieRental);

export default router