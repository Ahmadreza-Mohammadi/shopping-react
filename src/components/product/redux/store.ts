// import { configureStore } from '@reduxjs/toolkit';
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import todoProduct from './reducers/todoReducer';
// import { combineReducers } from "@reduxjs/toolkit";

// const persistConfig = {
//     key: "maktab-124",
//     storage,
//     whitelist: ["todoProducts"], // نام صحیح slice باید مشخص شود
// };

// const rootReducer = combineReducers({
//     todoProducts: todoProduct, 
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//     reducer: persistedReducer,
// });

// export const persistore = persistStore(store);

// export default store;