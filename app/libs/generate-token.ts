import jwt from 'jsonwebtoken';

type Payload = {
	username: string;
};

const generateToken = (payload: Payload) => {
	return jwt.sign(payload, process.env.JWT_TOKEN as string, {});
};

export { generateToken };
