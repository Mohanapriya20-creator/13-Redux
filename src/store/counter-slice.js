
import { createSlice } from '@reduxjs/toolkit';


const initalCounterState = { counter: 0, showCounter: true };
//creating slice
const counterSlice = createSlice({
    name: 'counter',
    initialState: initalCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        }

    }

})

//action creators
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;