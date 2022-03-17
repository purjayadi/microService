import { IInventory, IPaginate } from '../dto';
import { InventoryRepository } from '../database';

class InventoryService{
  repository: InventoryRepository;

  constructor(){
    this.repository = new InventoryRepository();
  }

  async GetInventory(payload: IPaginate){
    return this.repository.Inventory(payload);
  }

  async CreateInventory(payload: IInventory) {
    return this.repository.Create(payload);
  }

  async UpdateInventory(id:string, payload: IInventory) {
    return this.repository.UpdateById(id, payload);
  }

  async DeleteInventory(id:string){
    return this.repository.DeleteById(id);
  }

  async GetInventoryById(id: string) {
    return this.repository.FindById(id);
  }

  async SubscribeEvents(payload: IInventory){
    const data: IInventory = payload;
    this.CreateInventory(data);
 }
}

export default InventoryService;