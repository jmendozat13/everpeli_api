import { Router } from 'express'
import Post from '../models/Post'
import verify from './verifyToken'
const router = Router()

router.get('/', verify, async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts)
    } catch (err) {
        res.status(500).json({ message: error })
    }
})


router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post)
    } catch (err) {
        res.status(500).json({ message: err })
    }
})

router.post('/', verify, async (req, res) => {
    console.log(req.user)
    const { title, description } = req.body;
    if (title && description) {
        const post = new Post({
            title: title,
            description: description
        })
        try {
            const savePost = await post.save()
            res.json(savePost)
        } catch (err) {
            res.status(500).json({ message: err })
        }
    } else
        res.status(500).json({ error: 'There was an error.' })
})

router.delete('/:postId', verify, async (req, res) => {
    try {
        const { postId } = req.params
        const _post = await Post.findByIdAndDelete(postId)
        if (_post != null) {
            res.json(_post)
        } else {
            res.status(500).json({ message: "document not found!" })
        }
    } catch (err) {
        res.status(500).json({ message: err })
    }
})

router.put('/:postId', verify, async (req, res) => {
    const { postId } = req.params
    const { title } = req.body;
    try {
        const updatePost = await Post.updateOne(
            { _id: postId },
            { $set: { title: title } })
        res.json(updatePost)
    } catch (err) {
        res.status(500).json({ message: err })
    }
})


export default router