import { Request, Response } from 'express';
import { IWarehouse, IPaginate } from '../dto';
import { WarehouseService } from '../services';

export = (app:any) => {
  const service = new WarehouseService();

  app.get('/inventory/warehouse', async (req: Request, res: Response) => {
    const payload: IPaginate = req.query;
    try {
      const data = await service.GetWarehouse(payload);
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

  app.post('/inventory/warehouse/create', async (req: Request, res: Response) => {
      const warehouse:IWarehouse = req.body;
      try {
        const data = await service.CreateWarehouse(warehouse);
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

  app.patch('/inventory/warehouse/edit/:id', async (req: Request, res: Response) => {
      const warehouse:IWarehouse = req.body;
      try {
        await service.UpdateWarehouse(req.params.id, warehouse);
        return res.status(200).send({
            success: true,
            message: 'Update warehouse successfully'
        });
      } catch (error:any) {
        return res.status(500).send({
            success: false,
            message: error.message
        });
      }
  });

  app.delete('/inventory/warehouse/delete/:id', async (req: Request, res: Response) => {
    try {
        await service.DeleteWarehouse(req.params.id);
        return res.status(201).send({
            success: true,
            message: 'Delete warehouse successfully'
        });
    } catch (error:any) {
        return res.status(500).send({
            success: false,
            message: error.message
        });
    }
  });

  app.get('/inventory/warehouse/:id', async (req: Request, res: Response) => {
    try {
        const data = await service.GetWarehouseById(req.params.id);
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