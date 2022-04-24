import { Router } from 'express';
import { homeController } from '../controllers/home-controller';

const router = Router();

router.route('/').get(homeController);

export { router as homeRouter };
