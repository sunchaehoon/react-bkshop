import {configureStore, createSlice} from '@reduxjs/toolkit';


let stock = createSlice({
    name: 'stock',
    initialState: 0
});

let review = createSlice({
    name: 'review',
    initialState: 0
});


export default configureStore({
    reducer: {
        stock: stock.reducer
    }
});