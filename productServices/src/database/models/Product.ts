import mongoose, { Schema, Document, Types } from 'mongoose'

interface ProductDoc extends Document {
    name: String,
    description: String,
    isSelling: Boolean,
    isBuying: Boolean,
    img: String,
    type: String,
    variant: Types.ObjectId;
    variantOption: [any]
}

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  isSelling: Boolean,
  isBuying: Boolean,
  img: {
    data: Buffer,
    contentType: String
  },
  variant: { type: Schema.Types.ObjectId, ref: 'variant', require: true },
  variantOption: [
    {
      name: String,
      sku: String,
      price: Number,
      stock: Number
    }
  ]
}
, {
  toJSON: {
    transform (doc, ret) {
      delete ret.__v
      delete ret.createdAt
      delete ret.updatedAt
    }
  },
  timestamps: true
})

const Product = mongoose.model<ProductDoc>('product', ProductSchema)

export { Product }
