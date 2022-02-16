import { Router } from 'express'
import VariantRouter from './VariantRoute'

const router = Router()

router.use('/products/variant', VariantRouter)

export default router
