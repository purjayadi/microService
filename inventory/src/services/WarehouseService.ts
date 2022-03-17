import { IWarehouse, IPaginate } from '../dto';
import { WarehouseRepository } from '../database';

class WarehouseService{
  repository: WarehouseRepository;

  constructor(){
    this.repository = new WarehouseRepository();
  }

  async GetWarehouse(payload: IPaginate){
    return this.repository.Warehouse(payload);
  }

  async CreateWarehouse(payload: IWarehouse) {
    return this.repository.Create(payload);
  }

  async UpdateWarehouse(id:string, payload: IWarehouse) {
    return this.repository.UpdateById(id, payload);
  }

  async DeleteWarehouse(id:string){
    return this.repository.DeleteById(id);
  }

  async GetWarehouseById(id: string) {
    return this.repository.FindById(id);
  }
}

export default WarehouseService;