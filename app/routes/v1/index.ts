import { Router } from 'express';
import { apiController } from '../../controllers/api-controller';

const router = Router();

router.route('/').get(apiController);

export { router as V1Router };
