import mongoose, { Schema, Document } from 'mongoose'
import { softDeletePlugin, SoftDeleteModel } from 'soft-delete-plugin-mongoose'

interface VariantDoc extends Document {
    _id: string
    name: string
    variantOptions: [any]
}

const VariantSchema = new Schema({
  name: { type: String, required: true },
  variantOptions: [
    {
      name: String
    }
  ]
}, {
  toJSON: {
    transform (doc, ret) {
      delete ret.password
      delete ret.salt
      delete ret.__v
      delete ret.createdAt
      delete ret.updatedAt
      delete ret.deletedAt
    }
  },
  timestamps: true
})

VariantSchema.plugin(softDeletePlugin)
const Variant = mongoose.model<VariantDoc, SoftDeleteModel<VariantDoc>>('variant', VariantSchema)
export { Variant }
