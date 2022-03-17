import { Request, Response } from 'express';
import { PublishInventoryEvent } from '../utils';
import { IItem, IPaginate } from '../dto';
import { ItemService } from '../services';

export = (app:any) => {
  const service = new ItemService();

  app.get('/catalog/item', async (req: Request, res: Response) => {
    const payload:IPaginate = req.query;
    try {
      const data = await service.GetItems(payload);
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

  app.post('/catalog/item/create', async (req: Request, res: Response) => {
    const item: IItem = req.body;
    try {
      const data = await service.CreateItem(item);
      if (data.isInventory) {
        if (data.variants.length > 0) {
          data.variants.map((inv) => {
            inv.options.map((opt: { sku: string; stock: number; }) => {
              let val = {
                itemId: data._id,
                itemName: data.name,
                variant: inv.name,
                sku: opt.sku,
                warehouse: data.warehouse._id,
                stock: opt.stock
              };
              try {
                PublishInventoryEvent(val);
              } catch (error:any) {
                return res.status(500).send({
                  success: false,
                  message: error.message
                });
              }
            });
          });
        } else {
          let val = {
            itemId: data._id,
            itemName: data.name,
            variant: 'Not Available',
            sku: data.sku,
            warehouse: data.warehouse._id,
            stock: data.stock
          };
          try {
            PublishInventoryEvent(val);
          } catch (error:any) {
            return res.status(500).send({
              success: false,
              message: error.message
            });
          }
        }
      }
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

  app.patch('/catalog/item/edit/:id', async (req: Request, res: Response) => {
    const item:IItem = req.body;
    try {
      await service.UpdateItem(req.params.id, item);
      return res.status(200).send({
          success: true,
          message: 'Update item successfully'
      });
    } catch (error:any) {
      return res.status(500).send({
          success: false,
          message: error.message
      });
    }
  });

  app.delete('/catalog/item/delete/:id', async (req: Request, res: Response) => {
    try {
        await service.DeleteItem(req.params.id);
        return res.status(201).send({
            success: true,
            message: 'Delete item successfully'
        });
    } catch (error:any) {
        return res.status(500).send({
            success: false,
            message: error.message
        });
    }
  });

  app.get('/catalog/item/:id', async (req: Request, res: Response) => {
    try {
        const data = await service.GetItemById(req.params.id);
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
