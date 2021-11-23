import { createSlice } from "@reduxjs/toolkit";
export const ServingSizeSlice = createSlice({

    name: 'ServingSize',

    initialState: {
        value: 24,
        multiplier: 1
    },
    reducers: {
        increase: state => {
            state.value += 12;
            state.multiplier += 0.5;
        },
        decrease: state => {
            if (state.value >= 12) {
                state.value -= 12;
                state.multiplier -= 0.5;
            }
        },

    }
})
export const { increase, decrease } = ServingSizeSlice.actions;
export const selectServings = state => state.ServingSize.value, selectMultiplier = state => state.ServingSize.multiplier
export default ServingSizeSlice.reducer