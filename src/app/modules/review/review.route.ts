import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ReviewController } from './review.controller';
import { ReviewValidationSchema } from './review.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(ReviewValidationSchema),
  ReviewController.createReview,
);

export const ReviewRoutes = router;
