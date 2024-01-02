import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendCourseResponse from '../../utils/sendCourseResposnse';
import { ReviewServices } from './review.service';

const createReview = catchAsync(async (req, res) => {
  const ReviewData = req.body;
  const result = await ReviewServices.createReviewIntoDB(ReviewData);
  sendCourseResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review created successfully',
    data: result,
  });
});



export const ReviewController = {
  createReview, 
};
