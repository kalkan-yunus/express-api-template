import express, { Express } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import { homeRouter } from './routes/home';
import { V1Router } from './routes/v1';
import { loggerMiddleware } from './middlewares/logger-middleware';
import promBundle from 'express-prom-bundle';

import 'reflect-metadata';
import { errorHandlerMiddleware } from './middlewares/error-handler-middleware';
import { invalidRouteMiddleware } from './middlewares/invalid-route-middleware';

const createApp = (): Express => {
	const app = express();

	configureApp(app);
	applyRoutes(app);
	applyMonitoring(app);

	app.use('*', invalidRouteMiddleware);

	app.use(errorHandlerMiddleware);

	return app;
};

const configureApp = (app: Express) => {
	app.use(helmet()).use(cors()).use(compression()).use(loggerMiddleware);
};

const applyRoutes = (app: Express) => {
	app.use(homeRouter).use('/api/v1', V1Router);
};

const applyMonitoring = (app: Express) => {
	const metricsMiddleware = promBundle({
		includeMethod: true,
		includeUp: true,
	});
	app.use(metricsMiddleware);
};

export { createApp as app };
