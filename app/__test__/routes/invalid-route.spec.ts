import { app } from '../../app';
import request from 'supertest';

const server = app();

describe('GET /invalid', () => {
	it('success', async () => {
		const response = await request(server).get('/invalid');
		expect(response.body).toHaveProperty('status', false);
	});
});
