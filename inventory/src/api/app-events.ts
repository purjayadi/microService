import { Request, Response } from 'express';
import { InventoryService } from '../services';
import { IInventory } from '../dto';

export = (app:any) => {

    const service = new InventoryService();
    
    app.use('/inventory/app-events', async (req: Request,res: Response) => {
        const  payload: IInventory = req.body;
        service.SubscribeEvents(payload);
        console.log('======  Inventory Service Received Event ====== ');
        return res.status(200).json(payload);
    });

}