import Joi from '@hapi/joi';

export const registerUserValidation = data => {
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
export const loginValidation = data => {
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

export const registerMovieValidation = data => {
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
