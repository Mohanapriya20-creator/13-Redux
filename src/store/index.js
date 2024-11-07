import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter-slice';
import authReducer from './auth-slice';

//reducer function
// const reducer = (state = initalState, action) => {
//     if (action.type == 'Increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type == 'Decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type == 'Increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type == 'Toggle'){
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }
//     return state;
// }

//create a store
// const store = createStore(reducer);

//configureStore where we can pass multiple slices
const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
});



export default store;