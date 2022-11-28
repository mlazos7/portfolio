import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FilterState {
    value: string
}

const initialState: FilterState = {
    value: ''
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
})

export const {
    setFilter
} = filterSlice.actions;

export default filterSlice.reducer;