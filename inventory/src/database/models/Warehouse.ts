import mongoose, { Schema, PaginateModel, Document } from 'mongoose';
import paginate from 'mongoose-paginate-v2';

interface WarehouseDoc extends Document {
  name:String
  address: String
  phone: String
  email: String
  isActive: boolean
}

const WarehouseSchema = new Schema({
  name: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  phone: String,
  email: String,
  isActive: Boolean
}
, {
  toJSON: {
    transform (doc, ret) {
      delete ret.__v;
      delete ret.createdAt;
      delete ret.updatedAt;
    }
  },
  timestamps: true
});

WarehouseSchema.plugin(paginate);
const Warehouse = mongoose.model<WarehouseDoc, PaginateModel<WarehouseDoc>>('Warehouse', WarehouseSchema);

export { Warehouse };
