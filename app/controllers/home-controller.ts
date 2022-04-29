import { Request } from 'express';
import { User } from '../databases/entities/user-entity';
import { CustomResponse } from '../models/response-model';
import { db } from '../server';

const homeController = async (req: Request, res: CustomResponse) => {
	res.json({
		message: 'success',
		status: true
	});
};

export { homeController };
