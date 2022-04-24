import { Request } from 'express';
import Joi from 'joi';

const loginValidator = (req: Request) => {
	const schema = Joi.object({
		phoneNumber: Joi.string().alphanum().required(),
		password: Joi.string()
			.pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
			.min(6)
			.max(12)
			.required()
	}).required();
	return schema.validate(req.body);
};

export { loginValidator };
