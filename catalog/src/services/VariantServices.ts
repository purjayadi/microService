import { IVariant, IPaginate } from '../dto';
import { VariantRepository } from '../database';

class VariantService{
  repository: VariantRepository;

  constructor(){
    this.repository = new VariantRepository();
  }

  async GetVariant(payload: IPaginate){
    return this.repository.Variant(payload);
  }

  async CreateVariant(payload: IVariant) {
    return this.repository.CreateVariant(payload);
  }

  async UpdateVariant(id:string, payload: IVariant) {
    return this.repository.UpdateById(id, payload);
  }

  async DeleteVariant(id:string){
    return this.repository.DeleteById(id);
  }

  async GetVariantById(id: string) {
    return this.repository.FindById(id);
  }
}

export default VariantService;