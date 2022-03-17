import axios from 'axios';
import { IInventory } from 'src/dto';

export const FormateData = (data: any) => {
    if(data){
        return { data };
    }else{
        throw new Error('Data Not found!');
    }
};

export const PublishInventoryEvent = async (payload: IInventory) => {
    axios({
        method: 'POST',
        url: 'http://172.24.0.3:8001/inventory/app-events',
        data: payload
    });
};
