const { Validator } = require('tequilajs');

const schema = Validator.createSchema(Joi => {
    return {
        username: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
        birth_year: Joi.number()
            .integer()
            .min(1900)
            .max(2013),
    };
});

module.exports = {
    getHelloSchema: schema,
};
