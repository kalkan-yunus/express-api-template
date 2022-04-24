import { app } from '../../app';
import request from 'supertest';

const server = app();

describe('GET /', () => {
	it('success', async () => {
		const response = await request(server).get('/');
		expect(response.body).toHaveProperty('status', true);
	});
});

describe('GET /api/v1', () => {
	it('success', async () => {
		const response = await request(server).get('/api/v1');
		expect(response.body).toHaveProperty('status', true);
	});
});
