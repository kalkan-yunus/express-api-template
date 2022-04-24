import { Request } from 'express';

const logFormatter = (req: Request) => {
	return `${req.method} ${req.originalUrl}\n:::: body: ${req.body}`;
};

export { logFormatter };
