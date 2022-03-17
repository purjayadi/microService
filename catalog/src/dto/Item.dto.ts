export interface IItem{
    name: String,
    description: String,
    category: String,
    image: any[],
    price: Number,
    stock: Number,
    sku: String,
    vendor: any[],
    warehouse: {
        _id: string,
        name: string,
    },
    isActive: Boolean,
    isInventory: Boolean,
    variants: any[]
}

export interface IVariantItem{
    ItemId: String,
    variantId: String,
    variantOptionId: String,
    price: Number,
    sku: String
}

export interface ICategory{
    code: string;
    name: string;
    isActive: boolean;
}

export interface IEventItem{
    _id: string
    name: string
    unit: number
    sku: string
    price: number
    event: string
}

export interface IVariant{
    name: String
}

export interface IInventory {
    warehouse: String,
    itemId: String,
    itemName: String,
    variant: String,
    sku: String,
    stock: Number
}