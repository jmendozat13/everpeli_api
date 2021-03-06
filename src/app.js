import express, { json } from 'express'
import morgan from 'morgan'
import { connect } from 'mongoose'
import cors from 'cors'
import 'dotenv/config'

import indexRoute from './routes/index'
import postsRoute from './routes/post'
import commentsRoute from './routes/comments'
import authRoute from './routes/auth'
import movieRoute from './routes/movie'
import movieRentalRoute from './routes/movierental'

const app = express()
app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2)

connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('connected to DB!'))

app.use(json())
app.use(morgan('dev'))
app.use(cors())

app.use(indexRoute)
app.use('/api/posts/', postsRoute)
app.use('/api/comments/', commentsRoute)
app.use('/api/auth/', authRoute)
app.use('/api/movies/', movieRoute)
app.use('/api/movierental/', movieRentalRoute)

app.use((req, res, next) => {
    res.status(404).json({ message: "Not Found" });
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(503).json({ message: "503" });
})

export default app;