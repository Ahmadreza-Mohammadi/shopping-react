// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { ItodoProduct } from "../../interfeaces/product";

// const initialState: ItodoProduct[] = [];

// const todoProduct = createSlice({
//   name: "todoProducts",
//   initialState,
//   reducers: {
//     add: (state, action: PayloadAction<ItodoProduct>) => {
//       state.push(action.payload); // اضافه کردن محصول جدید به state
//     },
//     remove: (state, action: PayloadAction<number>) => {
//       return state.filter((product) => product.id !== action.payload); // حذف محصول با آیدی مشخص
//     },
//   },
// });

// export const { add, remove } = todoProduct.actions;
// export default todoProduct.reducer;