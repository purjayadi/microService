import { IItem, IPaginate } from '../dto';
import { ItemRepository } from '../database';

class ItemService{
  repository: ItemRepository;

  constructor(){
    this.repository = new ItemRepository();
  }

  async GetItems(payload: IPaginate){
    return this.repository.Items(payload);
  }

  async CreateItem(payload: IItem) {
    return this.repository.Create(payload);
  }

  async UpdateItem(id:string, payload: IItem) {
    return this.repository.UpdateById(id, payload);
  }

  async DeleteItem(id:string){
    return this.repository.DeleteById(id);
  }

  async GetItemById(id: string) {
    return this.repository.FindById(id);
  }

  async GetItemPayload(item:any){

    if(item){
        return item;
    }else{
        return ({error: 'No Inventory Available'});
    }
  }
}

export default ItemService;