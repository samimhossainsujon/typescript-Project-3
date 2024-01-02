import { Router } from 'express';
import { CatagoryRoutes } from '../modules/category/category.route';
import { CourseRoutes } from '../modules/course/course.route';
import { CoursesRoutes } from '../modules/courses/courses.route';
import { ReviewRoutes } from '../modules/review/review.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/course',
    route: CourseRoutes,
  },
  {
    path: '/courses',
    route: CoursesRoutes,
  },
  {
    path: '/categories',
    route: CatagoryRoutes,
  },
  {
    path: '/reviews',
    route: ReviewRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
