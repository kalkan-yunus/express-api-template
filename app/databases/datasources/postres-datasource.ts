import { DataSource } from 'typeorm';
import { User } from '../entities/postgres/user-entity';

const postgresDataSource = new DataSource({
	type: 'postgres',
	host: process.env.POSTGRES_HOST,
	port: Number(process.env.POSTGRES_PORT),
	username: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	entities: [User]
});

export { postgresDataSource };
