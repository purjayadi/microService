import mongoose, { Schema, Document, PaginateModel } from 'mongoose';
import paginate from 'mongoose-paginate-v2';
interface ItemDoc extends Document {
    name: String,
    description: String,
    image: any[],
    price: Number,
    sku: String,
    stock: Number,
    category: String
    vendor: any[],
    warehouse: {
      _id: string,
      name: string,
    },
    isActive: Boolean,
    isInventory: Boolean,
    variants: any[],
}

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: String,
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  image: [
    {
      name: String,
      isBanner: Boolean
    }
  ],
  price: Number,
  sku: String,
  stock: Number,
  warehouse: {
    _id: Schema.Types.ObjectId,
    name: String,
  },
  vendor: [
    {
      id: Schema.Types.ObjectId,
      name: String,
      isActive: Boolean,
    }
  ],
  isActive: { type: Schema.Types.Boolean, default: true },
  isInventory: Boolean,
  variants: [
    {
      name: String,
      options: [
        {
          sku: String,
          name: String,
          value: Number,
          price: Number,
          stock: Number
        }
      ]
    }
  ]
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

ItemSchema.plugin(paginate);
ItemSchema.plugin(require('mongoose-autopopulate'));
const Item = mongoose.model<ItemDoc, PaginateModel<ItemDoc>>('Item', ItemSchema);

export { Item };
