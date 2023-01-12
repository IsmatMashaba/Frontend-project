import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Country } from '../../types/Type';
type initialState = {
    countries: Country[];
};
const initialState: initialState = { countries: [] };
const favouriteSlice = createSlice({
    name: "favItem",
    initialState,
    reducers: {
        addFavouriteItem: (state, action: PayloadAction<Country>) => {
            state.countries.push(action.payload);
        },
    },
});
export const favouriteReducer = favouriteSlice.reducer;
const favouriteActions = favouriteSlice.actions;
export default favouriteActions;
