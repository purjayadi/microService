import { Variant } from '../database/models'
import { IVariant } from '../dto'

export const GetAllVariant = async () => {
  const result = await Variant.find()
  return result
}

export const GetVariantById = async (id: string) => {
  const findVariantById = await Variant.findById(id)
  if (!findVariantById) {
    throw new Error()
  }
  return findVariantById
}

export const AddVariant = async (payload: IVariant) => {
  const variant = await Variant.create(payload)
  return variant
}

export const UpdateVariant = async (id: string, payload: Partial<IVariant>) => {
  const findVariantId = await Variant.findById(id)
  if (!findVariantId) {
    // @todo throw custom error
    throw new Error('not found')
  }
  const updateVariant = await Variant.findByIdAndUpdate(id, { $set: payload }).exec()
  return updateVariant
}

export const DeleteVariant = async (id: string) => {
  const options = { validateBeforeSave: false }
  const deleted = await Variant.softDelete({ _id: id }, options)
  if (!deleted) {
    throw new Error('not found')
  }
  return deleted
}
