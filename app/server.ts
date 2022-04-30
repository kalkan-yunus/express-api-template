import 'dotenv/config';
import { app } from './app';
import { MongoDatabase } from './databases/mongo-database';

let db: MongoDatabase;

app().listen(process.env.PORT || 3000, async () => {
	try {
		db = await new MongoDatabase().getInstance();
	} catch (error) {
		console.log(error);
	}
});

export { db };
