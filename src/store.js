import {configureStore, createSlice} from '@reduxjs/toolkit';


let stock = createSlice({
    name: 'stock',
    initialState: [
        {id: 1, name: 'PatternBlack', count: 5},
        {id: 2, name: 'PatternWhite', count: 8}
    ]
});

let review = createSlice({
    name: 'review',
    initialState: 0,
    reducers: {
        addReview(state) {
            return state + 1;
        }
    }
});

let username = createSlice({
    name: 'username',
    initialState: "",
    reducers: {
        setUsername(state) {
            return state;
        }
    }
})

export const { setUsername } = username.actions;
// 만든 함수는 export 해야함


export default configureStore({
    reducer: {
        stock: stock.reducer,
        review: review.reducer,
        username: username.reducer
    }
});


// Redux state 변경하는 법
// -state 수정해주는 함수 만들고
// -원할 때 그 함수 실행해달라고 store.js에 요청