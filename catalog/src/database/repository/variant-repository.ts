import { Variant } from '../models/index';
import { IVariant, IPaginate } from 'src/dto';

class VariantRepository {
    async Variant(payload: IPaginate) {
        const options = {
            page: payload.page,
            limit: payload.limit,
            collation: {
                locale: 'en',
            },
        };
        return await Variant.paginate({}, options);
    }

    async CreateVariant(payload: IVariant) {
        const variant = new Variant(payload);
        return await variant.save();
    }

    async UpdateById(id: string, payload: IVariant) {
        return await Variant.findByIdAndUpdate(id, payload).exec();
    }

    async DeleteById(id: string) {
        return Variant.findByIdAndRemove(id).exec();
    }

    async FindById(id:string){
        return await Variant.findById(id);
    }
}

export default VariantRepository;