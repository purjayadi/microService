import * as VariantDall from '../dal'
import { IVariant } from '../dto/Variant.dto'

export const getAllVariant = () => {
  return VariantDall.GetAllVariant()
}

export const getVariantById = (id:string) => {
  return VariantDall.GetVariantById(id)
}

export const createVariant = (payload: IVariant) => {
  return VariantDall.AddVariant(payload)
}

export const updateVariant = (id:string, payload: Partial<IVariant>) => {
  return VariantDall.UpdateVariant(id, payload)
}

export const deleteVariantById = (id:string) => {
  return VariantDall.DeleteVariant(id)
}
