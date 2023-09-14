export interface ProductProps{
    brand:string;
    category:string;
    description:string;
    image:string;
    İsNew:boolean;
    oldPrice:number;
    price:number;
    title:string;
    id:number;
}
export interface StoreProps{
    brand:string;
    category:string;
    description:string;
    image:string;
    İsNew:boolean;
    oldPrice:number;
    price:number;
    title:string;
    id:number;
    quantity:number;
}

export interface stateprops{
    favoritedata:[],
    productdata:[],
    userInfo:null | string,
    NextReducer:any
}