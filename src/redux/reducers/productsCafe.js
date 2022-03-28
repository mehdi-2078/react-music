// *****///نمونه کد redux-thunk و درخواست async به سرور

// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'configs/axiosConfigs';
//
// export const getDataCafe = createAsyncThunk('GET_PRODUCTS_CAFE', async () => {
//     const r = await axios.get('cafe.json');
//     const { data } = r;
//     localStorage.setItem('GET_PRODUCTS_CAFE', JSON.stringify(data[Object.keys(data)]));
//     return data[Object.keys(data)];
// });
//
// const initProduct = {
//     productsCafe: {},
// };
//
// const slice = createSlice({
//     name: 'getProducts',
//     initialState: initProduct,
//     reducers: {},
//     extraReducers: {
//         [getDataCafe.fulfilled]: (state, action) => {
//             state.productsCafe = action.payload;
//         },
//         [getDataCafe.pending]: () => {
//             // کامپوننت loading استفاده شود
//         },
//     },
// });
//
// export const { GET_PRODUCTS_CAFE } = slice.actions;
// export default slice.reducer;
