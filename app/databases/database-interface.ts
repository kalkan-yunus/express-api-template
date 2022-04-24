import { DataSource } from 'typeorm';

abstract class Database {
	protected abstract dataSource: DataSource;
	protected abstract initialize(dataSource?: DataSource): Promise<void>;
}

export { Database };
