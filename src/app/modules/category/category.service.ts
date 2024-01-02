import { Tcatagory } from './category.interface';
import CatagoryModel from './category.model';

const createCatagoryIntoDB = async (catagory: Tcatagory) => {
  const result = await CatagoryModel.create(catagory);
  return result;
};

const getAllCatagoryFromDB = async () => {
  const result = await CatagoryModel.find().select({
    __v: 0,
  });
  return result;
};

export const CatagoryServices = {
  createCatagoryIntoDB,
  getAllCatagoryFromDB,
};
