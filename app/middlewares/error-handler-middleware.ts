import { NextFunction, Request } from 'express';
import { BaseError } from '../models/error-model';
import { CustomResponse } from '../models/response-model';

const errorHandlerMiddleware = (
	err: BaseError,
	req: Request,
	res: CustomResponse,
	next: NextFunction
) => {
	res.json({
		message: 'error',
		status: false,
		errors: [err.toJSON()]
	});
};

export { errorHandlerMiddleware };
