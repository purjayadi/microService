import { ICategory, IPaginate } from '../dto';
import { CategoryRepository } from '../database';

class CategoryService{
  repository: CategoryRepository;

  constructor(){
    this.repository = new CategoryRepository();
  }

  async GetCategory(payload: IPaginate){
    return this.repository.Category(payload);
  }

  async CreateCategory(payload: ICategory) {
    return this.repository.CreateCategory(payload);
  }

  async UpdateCategory(id:string, payload: ICategory) {
    return this.repository.UpdateById(id, payload);
  }

  async DeleteCategory(id:string){
    return this.repository.DeleteById(id);
  }

  async GetCategoryById(id: string) {
    return this.repository.FindById(id);
  }
}

export default CategoryService;