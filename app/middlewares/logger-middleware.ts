import { NextFunction, Request, Response } from 'express';
import { logFormatter } from '../libs/log-formatter';

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
	console.log(logFormatter(req));
	next();
};

export { loggerMiddleware };
