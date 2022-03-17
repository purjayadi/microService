import { Item } from '../models';
import { IItem, IPaginate } from '../../dto';

class ItemRepository {
    async Items(payload: IPaginate) {
        const item = Item.find();
        const options = {
            page: payload.page,
            limit: payload.limit,
            populate: [
                { path: 'category', select: 'name', row: true }
            ],
            lean: true,
            collation: {
                locale: 'en',
            },
        };
        return await Item.paginate(item, options);
    }

    async Create(payload: IItem) {
        const item = new Item(payload);
        return await item.save();
    }

    async UpdateById(id: string, payload: IItem) {
        return await Item.findByIdAndUpdate(id, payload).exec();
    }

    async DeleteById(id: string) {
        return Item.findByIdAndRemove(id).exec();
    }

    async FindById(id:string){
        return await Item.findById(id);
    }
}

export default ItemRepository;