import Sequelize from 'sequelize'
import { sequelize } from '../database/database'
import MovieRentalDetails from './MovieRentalDetails'

const MovieRental = sequelize.define('movie_rental', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    conditions: {
        type: Sequelize.TEXT
    },
    userid: {
        type: Sequelize.TEXT
    },
    returndate: {
        type: Sequelize.DATE
    },
    daterental: {
        type: Sequelize.DATE
    }
}, {
        timestamps: false
    })

MovieRental.hasMany(MovieRentalDetails, {
    foreingKey: 'movie_rentalId',
    sourceKey: 'id'
})

MovieRentalDetails.belongsTo(MovieRental, {
    foreingKey: 'movie_rentalId',
    sourceKey: 'id'
})

export default MovieRental  