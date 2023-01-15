import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {Country} from '../../types/Type';

type InitialState = {
    favouriteCountries: Country[];
};
const initialState: InitialState = { favouriteCountries: [] };

const favouriteSlice = createSlice({
    name: "favouriteItem",
    initialState,
    reducers: {
        addFavouriteItem: (state, action: PayloadAction<Country>) => {
            state.favouriteCountries.push(action.payload);
        },
        removeFavouriteItem:(state, action) => {
            state.favouriteCountries = state.favouriteCountries.filter(
                (item) => item.name.common !== action.payload
            );
    },
},}
)
export const favouriteReducer = favouriteSlice.reducer;
const favouriteActions = favouriteSlice.actions;
export default favouriteActions;
