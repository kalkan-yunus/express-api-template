import { DataSource } from 'typeorm';
import { DBConfigurationError, DBConnectionError } from '../models/error-model';
import { Database } from './database-interface';
import { postgresDataSource } from './datasources/postres-datasource';
import { User } from './entities/postgres/user-entity';

class PostgresDatabase extends Database {
	protected instance!: PostgresDatabase;
	protected dataSource!: DataSource;

	getInstance = async (dataSource?: DataSource) => {
		if (this.instance) {
			return this.instance;
		}
		this.instance = new PostgresDatabase();
		await this.initialize(dataSource);
		return this;
	};

	initialize = async (dataSource?: DataSource) => {
		if (!this.dataSource) {
			if (!dataSource) {
				this.dataSource = postgresDataSource;
			} else {
				this.dataSource = dataSource;
			}
		}

		try {
			await this.dataSource.initialize();
		} catch (error) {
			console.log(error);
			throw new DBConnectionError('');
		}
	};

	getUsers = async () => {
		if (!this.dataSource) {
			throw new DBConfigurationError('');
		}
		try {
			return await this.dataSource.manager.find(User);
		} catch (error) {
			return [];
		}
	};

	saveUser = async (user: User) => {
		if (!this.dataSource) {
			throw new DBConfigurationError('');
		}
		try {
			await this.dataSource.manager.save(user);
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	};
}

export { PostgresDatabase };
