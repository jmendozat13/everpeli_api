import { Schema, model } from 'mongoose';

const movieSchema = Schema({
    backdrop_path: {
        type: String,
        required: true
    },
    poster_path: {
        type: String,
        required: true
    },
    original_title: {
        type: String,
        required: true,
        max: 250,
        min: 3
    },
    overview: {
        type: String,
        required: true
    },
    release_date: {
        type: Date,
        default: Date.now
    }
})

export default model('Movie', movieSchema)