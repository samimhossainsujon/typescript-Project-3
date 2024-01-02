import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CourseController } from './course.controller';
import { CourseValidationSchema } from './course.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(CourseValidationSchema),
  CourseController.createCourse,
);

router.get('/best', CourseController.getBestCourse);

export const CourseRoutes = router;
