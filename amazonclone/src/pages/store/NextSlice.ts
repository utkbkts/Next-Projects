import { createSlice } from "@reduxjs/toolkit";
import { StoreProps } from "../../../type";

interface nextState {
  productdata: StoreProps[];
  favoritedata: StoreProps[];
  allProducts: StoreProps[];
  userInfo: null | string;
  Loading: boolean;
}

const initialState: nextState = {
  productdata: [],
  favoritedata: [],
  allProducts: [],
  userInfo: null,
  Loading: false,
};

export const NextSlice = createSlice({
  name: "NextSlice",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const existingProduct = state.productdata.find(
        (item) => item.id === action.payload.id
      );
    
      if (existingProduct) {
        // Eğer ürün sepette zaten varsa, miktarını artırın
        existingProduct.quantity += action.payload.quantity;
      } else {
        // Eğer ürün sepette yoksa, yeni ürün olarak ekleyin
        state.productdata.push(action.payload);
      }
    },
    addToFavorite: (state, action) => {
        const { id, quantity } = action.payload;
        const existingProduct = state.favoritedata.find(
          (item) => item.id === id
        );
      
        if (existingProduct) {
          // Ürün zaten favorilerde ise miktarını artırın
          existingProduct.quantity += quantity;
        } else {
          // Ürün favorilerde değilse yeni bir ürün olarak ekleyin
          state.favoritedata.push(action.payload);
        }
      },
    increaseQuantity: (state, action) => {
      const existingproduct = state.productdata.find(
        (item: StoreProps) => item.id === action.payload.id
      );
      existingproduct && existingproduct.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const existingproduct = state.productdata.find(
        (item: StoreProps) => item.id === action.payload.id
      );
      if (existingproduct?.quantity === 1) {
        existingproduct.quantity = 1;
      } else {
        existingproduct!.quantity--;
      }
    },
    deleteproduct: (state, action) => {
      state.productdata = state.productdata.filter(
        (item) => item.id !== action.payload.id
      );
    },
    isloading: (state, action) => {
      state.Loading = action.payload;
    },
    resetcart:(state)=>{
        state.productdata = [];
    },
    addUser:(state,action)=>{
        state.userInfo = action.payload
    },
    removeuser:(state)=>{
        state.userInfo = null;
    },
    setallproduct:(state,action)=>{
        state.allProducts = action.payload;
    }
  },
});

export const { addTocart, isloading,addToFavorite,increaseQuantity,decreaseQuantity,deleteproduct,resetcart,addUser,removeuser,setallproduct } = NextSlice.actions;
export default NextSlice.reducer;
