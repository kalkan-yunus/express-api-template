import 'dotenv/config';
import { app } from './app';
import { MongoDatabase } from './databases/mongo-database';

app().listen(process.env.PORT, async () => {
	try {
		await new MongoDatabase().getInstance();
	} catch (error) {
		console.log(error);
	}
});
