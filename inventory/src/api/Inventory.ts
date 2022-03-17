import { Request, Response } from 'express';
import { IInventory, IPaginate } from '../dto';
import { InventoryService } from '../services';

export = (app:any) => {
  const service = new InventoryService();

  app.get('/inventory', async (req: Request, res: Response) => {
    const payload: IPaginate = req.query;
    try {
      const data = await service.GetInventory(payload);
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

  app.post('/inventory/create', async (req: Request, res: Response) => {
      const payload:IInventory = req.body;
      try {
        const data = await service.CreateInventory(payload);
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

  app.patch('/inventory/edit/:id', async (req: Request, res: Response) => {
      const payload:IInventory = req.body;
      try {
        await service.UpdateInventory(req.params.id, payload);
        return res.status(200).send({
            success: true,
            message: 'Update Inventory successfully'
        });
      } catch (error:any) {
        return res.status(500).send({
            success: false,
            message: error.message
        });
      }
  });

  app.delete('/inventory/delete/:id', async (req: Request, res: Response) => {
    try {
        await service.DeleteInventory(req.params.id);
        return res.status(201).send({
            success: true,
            message: 'Delete Inventory successfully'
        });
    } catch (error:any) {
        return res.status(500).send({
            success: false,
            message: error.message
        });
    }
  });

  app.get('/inventory/:id', async (req: Request, res: Response) => {
    try {
        const data = await service.GetInventoryById(req.params.id);
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