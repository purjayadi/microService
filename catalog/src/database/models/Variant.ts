import mongoose, { Schema, PaginateModel, Document } from 'mongoose';
import paginate from 'mongoose-paginate-v2';

interface VariantDoc extends Document {
    name: String
}

const VariantSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
}
, {
  toJSON: {
    transform (doc, ret) {
      delete ret.__v;
    }
  },
  timestamps: true
});

VariantSchema.plugin(paginate);
const Variant = mongoose.model<VariantDoc, PaginateModel<VariantDoc>>('Variant', VariantSchema);

export { Variant };
