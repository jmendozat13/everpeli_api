const { Router } = require('express')
const router = Router()
const fetch = require('node-fetch')

router.get('/', async (req, res) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    const comments = await response.json()
    res.json(comments)
})

module.exports = router