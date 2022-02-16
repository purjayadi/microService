import { Router, Request, Response } from 'express'
import * as VariantController from '../controllers'
import { IVariant } from '../dto'

const VariantRouter = Router()

VariantRouter.get('/', async (req: Request, res: Response) => {
  try {
    const data = await VariantController.GetVariant()
    return res.status(200).send({
      success: true,
      message: 'Fetch variant successfully',
      data: data
    })
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: err
    })
  }
})

VariantRouter.get('/:id', async (req: Request, res: Response) => {
  const id = String(req.params.id)
  try {
    const data = await VariantController.GetVariantById(id)
    return res.status(200).send({
      success: true,
      message: 'Fetch variant successfully',
      data: data
    })
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: err
    })
  }
})

VariantRouter.patch('/:id', async (req: Request, res: Response) => {
  const id = String(req.params.id)
  const payload: IVariant = req.body
  try {
    const result = await VariantController.updateVariant(id, payload)
    return res.status(201).send({
      success: true,
      message: 'Update variant successfully',
      data: result
    })
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: 'Unable to update variant'
    })
  }
})

VariantRouter.post('/', async (req: Request, res: Response) => {
  const payload: IVariant = req.body
  try {
    const results = await VariantController.createVariant(payload)
    return res.status(200).send({
      success: true,
      message: 'Adding variant successfully',
      data: results
    })
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: 'Unable to create variant'
    })
  }
})

VariantRouter.delete('/:id', async (req: Request, res: Response) => {
  const id = String(req.params.id)
  try {
    await VariantController.deleteVariantById(id)
    return res.status(200).send({
      success: true,
      message: 'Variant deleted'
    })
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: err
    })
  }
})

export default VariantRouter
