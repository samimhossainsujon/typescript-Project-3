import { Schema, model } from 'mongoose';
import { Tcatagory } from './category.interface';

const CatagorySchema = new Schema<Tcatagory>({
  name: { type: String, required: true, unique: true },
});

const CatagoryModel = model<Tcatagory>('Catagory', CatagorySchema);
export default CatagoryModel;
