import mongoose, { Schema, PaginateModel, Document } from 'mongoose';
import paginate from 'mongoose-paginate-v2';

interface InventoryDoc extends Document {
  warehouse: Schema.Types.ObjectId
  item: {
    _id: Schema.Types.ObjectId,
    name: String
  },
  variant: {
    name: String,
    options: [
      {
        _id: Schema.Types.ObjectId,
        name: String,
        sku: String,
        stock: Number
      }
    ]
  },
}

const InventorySchema = new Schema({
  warehouse: { type: Schema.Types.ObjectId, ref: 'Warehouse' },
  item: {
    _id: Schema.Types.ObjectId,
    name: String
  },
  variant: {
    name: String,
    options: [
      {
      _id: Schema.Types.ObjectId,
      name: String,
      sku: String,
      stock: Number
      }
    ]
  }
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

InventorySchema.plugin(paginate);
const Inventory = mongoose.model<InventoryDoc, PaginateModel<InventoryDoc>>('Inventory', InventorySchema);

export { Inventory };
