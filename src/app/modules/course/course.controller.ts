import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendCourseResponse from '../../utils/sendCourseResposnse';
import { CourseServices } from './course.service';

const createCourse = catchAsync(async (req, res) => {
  const courseData = req.body;
  const result = await CourseServices.createCourseIntoDB(courseData);
  sendCourseResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course created successfully',
    data: result,
  });
});

const getSingleCourse = catchAsync(async (req, res) => {
  const _id = req.params._id;
  const courseid = await CourseServices.getSingleCourseFromDB(_id);

  sendCourseResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single Course Data retrieved successfully',
    data: courseid,
  });
});

const getBestCourse = catchAsync(async (req, res) => {
  const bestCourseData = await CourseServices.getBestCourseFromDb();

  sendCourseResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Best course retrieved successfully',
    data: bestCourseData[0],
  });
});

export const CourseController = {
  createCourse,
  getSingleCourse,
  getBestCourse,
};
