import { DataSource } from 'typeorm';
import { User } from '../entities/user-entity';

const mongoDataSource = new DataSource({
	type: 'mongodb',
	host: 'localhost',
	port: 27017,
	database: 'test',
	entities: [User],
	useUnifiedTopology: true,
	connectTimeoutMS: 3000
});

export { mongoDataSource };
