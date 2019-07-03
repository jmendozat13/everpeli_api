import { Router } from 'express';
const router = Router()

router.get('/', (req, res) => {
    res.json({ title: "Hello EverSaaS" })
})


export default router
