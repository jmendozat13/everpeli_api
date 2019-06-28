const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
var path = require('path');
require('dotenv/config')

const app = express()

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
app.use('/api/comments/', require('./routes/comments'))
app.use('/api/auth/', require('./routes/auth'))
app.use('/api/movies/', require('./routes/movie'))


// Handler for 404 - Resource Not Found
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname + '/error/404.html'));
})

// Handler for Error 500
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.sendFile(path.join(__dirname + '/error/503.html'));
})

//starting the server 
app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})

