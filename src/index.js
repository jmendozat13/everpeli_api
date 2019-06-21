const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv/config')


//settings 
app.set('json spaces', 2)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

//connection to mongoDB 
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('connected to DB!'))

//middlewares
app.use(morgan('dev'))
app.use(cors())

//routes
app.use(require('./routes/index'))
app.use('/api/posts/', require('./routes/post'))
app.use('/api/users/', require('./routes/users'))

// Handler for 404 - Resource Not Found
app.use((req, res, next) => {
    res.status(404).send('We think you are lost!')
})

// Handler for Error 500
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.send('Error 500!')
})

//starting the server 
app.set('port', process.env.PORT || 3000)
app.listen(3000, () => {
    console.log(`Server on port ${3000}`)
})

