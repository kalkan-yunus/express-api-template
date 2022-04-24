import { Request } from 'express';
import { CustomResponse } from '../models/response-model';

const apiController = (req: Request, res: CustomResponse) => {
	res.json({
		message: 'success',
		status: true
	});
};

export { apiController };
