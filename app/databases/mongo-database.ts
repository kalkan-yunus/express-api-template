import { DataSource } from 'typeorm';
import { DBConfigurationError, DBConnectionError } from '../models/error-model';
import { Database } from './database-interface';
import { mongoDataSource } from './datasources.ts/mongo-datasource';
import { User } from './entities/user-entity';

class MongoDatabase extends Database {
	protected instance!: MongoDatabase;
	protected dataSource!: DataSource;

	getInstance = async (dataSource?: DataSource) => {
		if (this.instance) {
			return this.instance;
		}
		this.instance = new MongoDatabase();
		await this.initialize(dataSource);
		return this;
	};

	initialize = async (dataSource?: DataSource) => {
		if (!this.dataSource) {
			if (!dataSource) {
				this.dataSource = mongoDataSource;
			} else {
				this.dataSource = dataSource;
			}
		}

		try {
			await this.dataSource.initialize();
		} catch (error) {
			throw new DBConnectionError('');
		}
	};

	getUsers = async () => {
		if (!this.dataSource) {
			throw new DBConfigurationError('data source is missing');
		}
		try {
			return await this.dataSource.mongoManager.find(User);
		} catch (error) {
			return [];
		}
	};
}

export { MongoDatabase };
