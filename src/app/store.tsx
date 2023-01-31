import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartType } from "../App";

const initialState: CartType[] = [];

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addQuantity(state: CartType[], action: PayloadAction<number>) {
      state.findIndex((data: CartType, idx: number) => {
        if (data.id === action.payload) state[idx].quantity++;
      });
    },
    decQuantity(state: CartType[], action: PayloadAction<number>) {
      state.findIndex((data: CartType, idx: number) => {
        if (data.id === action.payload && state[idx].quantity !== 1)
          state[idx].quantity--;
      });
    },
    addCart(state: CartType[], action: PayloadAction<CartType>) {
      const inCart = state.findIndex((data: CartType) => {
        if (data.id === action.payload.id) return true;
        else return false;
      });
      console.log(inCart);
      if (inCart === -1) {
        state.push(action.payload);
      } else {
        for (let i = 0; i < state.length; i++) {
          if (state[i].id === action.payload.id) state[i].quantity++;
        }
      }
    },
  },
});

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});
export const { addQuantity, decQuantity, addCart } = cart.actions;
