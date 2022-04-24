import { NextFunction, Request, Response } from 'express';
import { InvalidRouteError } from '../models/error-model';

const invalidRouteMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	next(new InvalidRouteError('no route'));
};

export { invalidRouteMiddleware };
