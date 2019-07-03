import { Router } from 'express'
import verify from './verifyToken'
import {
    getPostList,
    getPostById,
    registerNewPost,
    deletePost,
    updatePost
} from '../controllers/post.controller'
const router = Router()

router.get('/', verify, getPostList)
router.get('/:postId', getPostById)
router.post('/', verify, registerNewPost)
router.delete('/:postId', verify, deletePost)
router.put('/:postId', verify, updatePost)


export default router