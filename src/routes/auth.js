const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { registerUserValidation, loginValidation } = require('../validation');

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body
    //Lets validate the data before we a user
    const { error } = registerUserValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    //checking if the user is already in the database
    const emailExist = await User.findOne({ email: email })
    if (emailExist) return res.status(400).send('Email already exists')
    //hash password 
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt);
    //Create a new user
    const user = new User({
        name: name,
        email: email,
        password: hashedPassword
    })
    try {
        const saveUser = await user.save()
        res.json({ name: saveUser.name, email: saveUser.email })
    } catch (err) {
        res.status(400).send(err)
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body
    //Lets validate the data
    const { error } = loginValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    //checking if the email exists
    const user = await User.findOne({ email: email })
    if (!user) return res.status(400).send('Email is not found')
    // validate password is correct
    const validPass = await bcrypt.compare(password, user.password)
    if (!validPass) return res.status(400).send('Invalid password')
    //create an assing a token 
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send(token)
})

module.exports = router