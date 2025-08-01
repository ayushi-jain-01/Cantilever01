// validation
import Joi from 'joi';

// register validation
const registerValidation= (data) =>{
    const schema= Joi.object({
    name: Joi.string().required().min(6),
    email: Joi.string().required().min(6).email(),
    password: Joi.string().min(6).required()
    });
    return schema.validate(data);
}

// login validation
const loginValidation= (data) =>{
    const schema= Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
    });
    return schema.validate(data);
}

export { registerValidation };
export { loginValidation };
