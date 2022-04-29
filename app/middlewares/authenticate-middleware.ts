import { NextFunction, Request } from 'express';
import jwt from 'jsonwebtoken';
import { AuthenticationMissingTokenError } from '../models/error-model';
import { CustomResponse } from '../models/response-model';

const authenticateMiddleware = async (
	req: Request,
	res: CustomResponse,
	next: NextFunction
) => {
	const authHeader = req.headers['authorization'];
	if (!authHeader) {
		next(new AuthenticationMissingTokenError(''));
		return;
	}
	const token = authHeader.split(' ')[1];
	if (!token) {
		next(new AuthenticationMissingTokenError(''));
		return;
	}
	await jwt.verify(token, process.env.JWT_TOKEN as string);

	next();
};

export { authenticateMiddleware };
