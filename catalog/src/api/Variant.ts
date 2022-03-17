import { Request, Response } from 'express';
import { IVariant, IPaginate } from '../dto';
import { VariantService } from '../services';

export = (app:any) => {
  const service = new VariantService();

  app.get('/catalog/variant', async (req: Request, res: Response) => {
    const payload: IPaginate = req.query;
    try {
      const data = await service.GetVariant(payload);
      return res.status(200).send({
        success: true,
        data: data
      });
    } catch (err:any) {
      return res.status(500).send({
        success: false,
        message: err.message
      });
    }
  });

  app.post('/catalog/variant/create', async (req: Request, res: Response) => {
      const Variant:IVariant = req.body;
      try {
        const data = await service.CreateVariant(Variant);
        return res.status(200).send({
            success: true,
            data: data
        });
      } catch (error:any) {
        return res.status(500).send({
            success: false,
            message: error.message
        });
      }
  });

  app.patch('/catalog/variant/edit/:id', async (req: Request, res: Response) => {
      const Variant:IVariant = req.body;
      try {
        await service.UpdateVariant(req.params.id, Variant);
        return res.status(200).send({
            success: true,
            message: 'Update Variant successfully'
        });
      } catch (error:any) {
        return res.status(500).send({
            success: false,
            message: error.message
        });
      }
  });

  app.delete('Variant/delete/:id', async (req: Request, res: Response) => {
    try {
        await service.DeleteVariant(req.params.id);
        return res.status(201).send({
            success: true,
            message: 'Delete Variant successfully'
        });
    } catch (error:any) {
        return res.status(500).send({
            success: false,
            message: error.message
        });
    }
  });

  app.get('/catalog/variant/:id', async (req: Request, res: Response) => {
    try {
        const data = await service.GetVariantById(req.params.id);
        return res.status(200).send({
            success: true,
            data: data
        });
    } catch (error:any) {
        return res.status(500).send({
            success: false,
            message: error.message
        });
    }
  });
}