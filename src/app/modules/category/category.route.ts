import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CatagoryController } from './category.controller';
import { CatagoryValidationSchema } from './category.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(CatagoryValidationSchema),
  CatagoryController.createCatagory,
);

router.get('/', CatagoryController.getAllCatagory);

export const CatagoryRoutes = router;
