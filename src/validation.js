const Joi = require('@hapi/joi')

const registerUserValidation = data => {

    const schema = {
        name: Joi.string()
            .min(6)
            .required(),
        email: Joi.string()
            .min(6)
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .required()
    }
    return Joi.validate(data, schema)
}
const loginValidation = data => {

    const schema = {
        email: Joi.string()
            .min(6)
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .required()
    }
    return Joi.validate(data, schema)
}

const registerMovieValidation = data => {
    const schema = {
        backdrop_path: Joi.string()
            .required(),
        poster_path: Joi.string()
            .required(),
        original_title: Joi.string()
            .required()
            .max(250)
            .min(3),
        overview: Joi.string()
            .required()
    }
    return Joi.validate(data, schema)
}


module.exports.registerUserValidation = registerUserValidation
module.exports.loginValidation = loginValidation
module.exports.registerMovieValidation = registerMovieValidation