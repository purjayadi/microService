import { IVariant } from 'src/dto'
import * as Service from '../services'

export const GetVariant = async () => {
  return await Service.getAllVariant()
}

export const GetVariantById = async (id:string) => {
  return await Service.getVariantById(id)
}

export const createVariant = async (payload: IVariant) => {
  return await Service.createVariant(payload)
}

export const updateVariant = async (id:string, payload: IVariant) => {
  return await Service.updateVariant(id, payload)
}

export const deleteVariantById = async (id:string) => {
  return await Service.deleteVariantById(id)
}
