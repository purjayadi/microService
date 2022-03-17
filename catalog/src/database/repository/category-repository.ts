import { Category } from '../models/index';
import { ICategory, IPaginate } from 'src/dto';

class CategoryRepository {
    async Category(payload: IPaginate) {
        const options = {
            page: payload.page,
            limit: payload.limit,
            collation: {
                locale: 'en',
            },
        };
        return await Category.paginate({}, options);
    }

    async CreateCategory(payload: ICategory) {
        const category = new Category(payload);
        return await category.save();
    }

    async UpdateById(id: string, payload: ICategory) {
        return await Category.findByIdAndUpdate(id, payload).exec();
    }

    async DeleteById(id: string) {
        return Category.findByIdAndRemove(id).exec();
    }

    async FindById(id:string){
        return await Category.findById(id);
    }
}

export default CategoryRepository;