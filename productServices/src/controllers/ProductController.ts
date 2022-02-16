import { Request, Response, NextFunction } from 'express'
import { Product, Variant } from '../database/models'
import { IProduct } from 'src/dto'

export const GetProduct = async (req: Request, res: Response, next: NextFunction) => {
  const result = await Product.find().populate('variant')
  if (result !== null) {
    return res.json(result)
  }
  return res.json({ message: 'Unable fetch product' })
}

export const AddProduct = async (req: Request, res: Response, next: NextFunction) => {
  const { name, type, variant, variantOption } = <IProduct>req.body
  const query = { name: variant }
  const findVariantByName = await Variant.findOneAndUpdate({}, query, { upsert: true, new: true }).exec()
  const product = new Product({
    name: name,
    type: type,
    variant: findVariantByName._id,
    variantOption: variantOption
  })
  product.save()
  return res.json(product)
}

export const GetProductById = async (req: Request, res: Response) => {
  const productId = req.params.id
  const findProductById = await Product.findById(productId).populate('variant')
  if (!findProductById) {
    return res.json({ status: 404, message: 'Product not found' })
  }
  return res.json({ status: 200, message: 'Product retrieved', data: findProductById })
}

export const EditProduct = async (req: Request, res: Response) => {
  const productId = req.params.id
  const { name, type, variant, variantOption } = <IProduct>req.body
  const findVariantByName = await Variant.findOneAndUpdate({}, { name: variant }, { upsert: true, new: true }).exec()
  const product = ({
    name: name,
    type: type,
    variant: findVariantByName._id,
    variantOption: variantOption
  })
  const findProductById = await Product.findOneAndUpdate({ _id: productId }, { $set: product }).exec()
  if (!findProductById) {
    return res.json({ status: 404, message: 'Product not found' })
  }
  return res.json({ status: 200, message: 'Product has been updated', data: findProductById })
}
