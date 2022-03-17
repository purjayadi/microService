import { Inventory } from '../models/index';
import { IInventory, IPaginate } from 'src/dto';

class InventoryRepository {
    async Inventory(payload: IPaginate) {
        const options = {
            page: payload.page,
            limit: payload.limit,
            populate: [
                { path: 'warehouse', select: 'name', row: true }
            ],
            collation: {
                locale: 'en',
            },
        };
        return await Inventory.paginate({}, options);
    }

    async Create(payload: IInventory) {
        const inventory = new Inventory(payload);
        return await inventory.save();
    }

    async UpdateById(id: string, payload: IInventory) {
        return await Inventory.findByIdAndUpdate(id, payload).exec();
    }

    async DeleteById(id: string) {
        return Inventory.findByIdAndRemove(id).exec();
    }

    async FindById(id:string){
        return await Inventory.findById(id);
    }
}

export default InventoryRepository;