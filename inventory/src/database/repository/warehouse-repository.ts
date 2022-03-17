import { Warehouse } from '../models/index';
import { IWarehouse, IPaginate } from 'src/dto';

class WarehouseRepository {
    async Warehouse(payload: IPaginate) {
        const options = {
            page: payload.page,
            limit: payload.limit,
            collation: {
                locale: 'en',
            },
        };
        return await Warehouse.paginate({}, options);
    }

    async Create(payload: IWarehouse) {
        const warehouse = new Warehouse(payload);
        return await warehouse.save();
    }

    async UpdateById(id: string, payload: IWarehouse) {
        return await Warehouse.findByIdAndUpdate(id, payload).exec();
    }

    async DeleteById(id: string) {
        return Warehouse.findByIdAndRemove(id).exec();
    }

    async FindById(id:string){
        return await Warehouse.findById(id);
    }
}

export default WarehouseRepository;