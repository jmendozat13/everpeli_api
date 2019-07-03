import express, { json } from 'express';
import morgan from 'morgan';
import { connect } from 'mongoose';
import cors from 'cors';
import { join } from 'path';
import 'dotenv/config';

import indexRoute from './routes/index'
import postsRoute from './routes/post'
import commentsRoute from './routes/comments'
import authRoute from './routes/auth'
import movieRoute from './routes/movie'
import movieRentalRoute from './routes/movierental'

//settings 
const app = express()
app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2)

//connection to mongoDB 
connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('connected to DB!'))

//middlewares
app.use(json())
app.use(morgan('dev'))
app.use(cors())

//routes
app.use(indexRoute)
app.use('/api/posts/', postsRoute)
app.use('/api/comments/', commentsRoute)
app.use('/api/auth/', authRoute)
app.use('/api/movies/', movieRoute)
app.use('/api/movierental/', movieRentalRoute)


// Handler for 404 - Resource Not Found
app.use((req, res, next) => {
    res.sendFile(join(__dirname + '/error/404.html'));
})

// Handler for Error 500
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.sendFile(join(__dirname + '/error/503.html'));
})

export default app;