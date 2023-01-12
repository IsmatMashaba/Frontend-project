import {createSlice,PayloadAction} from "@reduxjs/toolkit";

import {Country} from "../../types/Type";


type InitialState= {
    countries: Country [];
    isLoading: boolean;

}

const initialState: InitialState = {
    countries: [],
    isLoading:false,

};

const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
      // get data
        getCountryData: (state,actions)=> {
            state.countries = actions.payload

            state.isLoading=false
        },
        getCountryDataPending: (state)=>{
            state.isLoading = true
        },

    },
})

export const countryActions = countrySlice.actions
const countryReducer = countrySlice.reducer;
export default countryReducer

