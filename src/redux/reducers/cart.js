// ///***نمونه کد برای سبد خرید با استفاده از redux-toolkit

// import { createSlice } from '@reduxjs/toolkit';
//
// const initProduct = {
//     numberCart: 0,
//     Carts: [],
//     totalPrice: 0,
// };
// const slice = createSlice({
//     name: 'cart',
//     initialState: initProduct,
//     reducers: {
//         ADD_TO_CART: (state = initProduct, action) => {
//             if (state.numberCart === 0) {
//                 const cart = {
//                     quantity: 1,
//                     foodNameFa: action.payload.foodNameFa,
//                     foodNameEn: action.payload.foodNameEn,
//                     descriptionFa: action.payload.descriptionFa,
//                     descriptionEn: action.payload.descriptionEn,
//                     foodImage: action.payload.foodImage,
//                     foodType: action.payload.foodType,
//                     priceFa: action.payload.priceFa,
//                     priceEn: action.payload.priceEn,
//                 };
//                 state.Carts.push(cart);
//             } else {
//                 let check = false;
//                 state.Carts.map((item, key) => {
//                     if (item.foodNameFa === action.payload.foodNameFa) {
//                         state.Carts[key].quantity += 1;
//                         check = true;
//                     }
//                 });
//                 if (!check) {
//                     const cart = {
//                         quantity: 1,
//                         foodNameFa: action.payload.foodNameFa,
//                         foodNameEn: action.payload.foodNameEn,
//                         descriptionFa: action.payload.descriptionFa,
//                         descriptionEn: action.payload.descriptionEn,
//                         foodImage: action.payload.foodImage,
//                         foodType: action.payload.foodType,
//                         priceFa: action.payload.priceFa,
//                         priceEn: action.payload.priceEn,
//                     };
//                     state.Carts.push(cart);
//                 }
//             }
//             state.numberCart += 1;
//         },
//         INCREMENT: (state = initProduct, action) => {
//             state.Carts.map((item, key) => {
//                 if (item.foodNameFa === action.payload.foodNameFa) {
//                     state.Carts[key].quantity += 1;
//                 }
//             });
//         },
//     },
// });
// export const { ADD_TO_CART, INCREMENT, DECREMENT } = slice.actions;
// export default slice.reducer;
