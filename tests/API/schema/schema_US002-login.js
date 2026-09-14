const joi = require('joi')

const userSchema = joi.object({

    id: joi.number().integer(),
    name: joi.string(),
    email: joi.string(),
    isAdmin: joi.string()

});

const {error, value} = userSchema.validate({
    id: 2,
    name: 'Admin',
    email: 'admin@biblioteca.com',
    isAdmin: true
})

module.exports = {userSchema}
