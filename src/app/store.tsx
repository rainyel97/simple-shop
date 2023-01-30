import { configureStore, createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: [
    { idx: 1, name: "Macbook Air M1", price: 1390000, quantity: 1 },
    { idx: 2, name: 'Macbook Pro 14"', price: 2690000, quantity: 1 },
  ],
  reducers: {},
});

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});
