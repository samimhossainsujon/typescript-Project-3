import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendCourseResponse from '../../utils/sendCourseResposnse';
import CatagoryModel from './category.model';
import { CatagoryServices } from './category.service';

const createCatagory = catchAsync(async (req, res) => {
  const { name } = req.body;
  const newCategory = new CatagoryModel({ name });
  const savedCategory = await newCategory.save();

  const result = await CatagoryServices.createCatagoryIntoDB(savedCategory);
  sendCourseResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category created successfully',
    data: result,
  });
});

const getAllCatagory = catchAsync(async (req, res) => {
  const result = await CatagoryServices.getAllCatagoryFromDB();
  sendCourseResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Categories retrieved successfully',
    data: result,
  });
});

export const CatagoryController = {
  createCatagory,
  getAllCatagory,
};
