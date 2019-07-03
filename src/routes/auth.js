import { Router } from 'express'
import User from '../models/User';
import { genSalt, hash, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { registerUserValidation, loginValidation } from '../validation';
const router = Router()

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body
    try {
        const { error } = registerUserValidation(req.body)
        if (error) return res.status(400).send(error.details[0].message)

        const emailExist = await User.findOne({ email: email })
        if (emailExist) return res.status(400).send('Email already exists')

        const salt = await genSalt(10)
        const hashedPassword = await hash(password, salt);

        const user = new User({
            name: name,
            email: email,
            password: hashedPassword
        })
        const saveUser = await user.save()
        res.json({ name: saveUser.name, email: saveUser.email })
    } catch (err) {
        res.status(500).send(err)
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body
    const { error } = loginValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
        const user = await User.findOne({ email: email })
        if (!user) return res.status(400).send('Email is not found')

        const validPass = await compare(password, user.password)
        if (!validPass) return res.status(400).send('Invalid password')

        const token = sign({ _id: user._id }, process.env.TOKEN_SECRET)
        res.header('auth-token', token).send(token)
    } catch (err) {
        res.status(500).send(err)
    }
})

export default router