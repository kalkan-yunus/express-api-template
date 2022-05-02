import { Request } from 'express';

const logFormatter = (req: Request) => {
	return `${req.method} ${req.originalUrl}\n:::: body: ${JSON.stringify(
		req.body,
		undefined,
		2
	)}`;
};

export { logFormatter };
