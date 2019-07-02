import Sequelize from 'sequelize'
import { sequelize } from '../database/database'

const MovieRentalDetails = sequelize.define('movie_rental_details', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    movieid: {
        type: Sequelize.TEXT
    },
    state: {
        type: Sequelize.TEXT
    },
    isreturn: {
        type: Sequelize.BOOLEAN
    },
    movie_rentalId: {
        type: Sequelize.INTEGER
    }
}, {
        timestamps: false
    })

export default MovieRentalDetails