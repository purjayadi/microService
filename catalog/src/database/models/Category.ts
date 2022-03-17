import mongoose, { Schema, PaginateModel, Document } from 'mongoose';
import paginate from 'mongoose-paginate-v2';

interface CategoryDoc extends Document {
  code:String
  name: String
  isActive: Boolean
}

const CategorySchema = new Schema({
  code: {
    type: String,
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  isActive: { type: Boolean, default: true }
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

CategorySchema.plugin(paginate);
const Category = mongoose.model<CategoryDoc, PaginateModel<CategoryDoc>>('Category', CategorySchema);

export { Category };
