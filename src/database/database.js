import Sequelize from 'sequelize'

export const sequelize = new Sequelize(
    process.env.BD_SQL_DATABASE,
    process.env.BD_SQL_USERNAME,
    process.env.BD_SQL_PASSWORD,
    {
        host: process.env.BD_SQL_HOSTNAME,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
)