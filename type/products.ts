

export interface Product {
    _id: string;
    name: string;
    price: number;
    description?: string;
    _type: "Product";
    image?: {
        asset: {
         _ref: string;
         _type: "image";   
        } 
    }
    slug: {
        _type: "slug";
        current: string;
    }
    stockLevel: number;
}