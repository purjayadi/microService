export interface IWarehouse{
    name: string;
    phone: string;
    email: string;
    address: string;
    isActive: boolean
}

export interface IInventory{
    warehouse: String
    item: {
        _id: String,
        name: String
    },
    variant: {
        name: String,
        options: [{
            _id: String,
            name: String,
            sku: String,
            stock: Number
        }]
    },
}
