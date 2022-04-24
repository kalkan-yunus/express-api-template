import { Send } from 'express-serve-static-core';

type CustomResponseData = {
	status: boolean;
	message: 'success' | 'error';
	userMessage?: string;
	data?: object | object[];
	errors?: object | object[];
};

interface CustomResponse extends Express.Response {
	json: Send<CustomResponseData, this>;
}

export { CustomResponse };
