import { Router } from 'express';
import verify from './verifyToken';
import { registerNewMovie, getAllMovie } from '../controllers/movie.controller'
const router = Router()

router.post('/', verify, registerNewMovie)
router.get('/', getAllMovie)

export default router