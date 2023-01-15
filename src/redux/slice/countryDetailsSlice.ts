import { createSlice } from "@reduxjs/toolkit";
import { Country } from "../../types/Type";

type initialState = {
    countryItem: Country[];
    isLoading: boolean;
};
const initialState: initialState = {
    countryItem: [],
    isLoading: false,
};
const countryDetailsSlice = createSlice({
    name: "countryItem",
    initialState,
    reducers: {
        getCountryData: (state, action) => {
            state.countryItem = action.payload;
            state.isLoading = false;
        },
        getCountryDataPending: (state) => {
            state.isLoading = true;
        },
    },
});
export const countryDetailsAction = countryDetailsSlice.actions;
const countryDetailsReducer = countryDetailsSlice.reducer;
export default countryDetailsReducer;
