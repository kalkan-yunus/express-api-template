import { DataSource } from 'typeorm';
import { User } from '../entities/user-entity';

const mongoDataSource = new DataSource({
	type: 'mongodb',
	host: process.env.MONGODB_HOST,
	port: Number(process.env.MONGODB_PORT),
	database: process.env.MONGODB_DATABASE,
	password: process.env.MONGIDB_PASSWORD,
	entities: [User],
	useUnifiedTopology: true,
	connectTimeoutMS: 3000
});

export { mongoDataSource };
