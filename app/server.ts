import 'dotenv/config';
import { app } from './app';
import { User } from './databases/entities/postgres/user-entity';
import { PostgresDatabase } from './databases/postgres-database';

let db: PostgresDatabase;

app().listen(process.env.PORT || 3000, async () => {
	try {
		db = await new PostgresDatabase().getInstance();
	} catch (error) {
		console.log(error);
	}
});

export { db };
