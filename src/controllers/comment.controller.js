import fetch from 'node-fetch';

export async function getComments(req, res) {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    const comments = await response.json()
    res.json(comments)
}