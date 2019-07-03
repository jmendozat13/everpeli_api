import { Router } from 'express';
import fetch from 'node-fetch';
const router = Router()

router.get('/', async (req, res) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    const comments = await response.json()
    res.json(comments)
})

export default router