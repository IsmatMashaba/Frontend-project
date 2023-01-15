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
        getCountryData: (state,actions)=> {
            state.countries = actions.payload

            state.isLoading=false
        },
        getCountryDataPending: (state)=>{
            state.isLoading = true
        },
        countryAscending: (state) => {
            state.countries.sort((a, b) => {
                if (a.name.common > b.name.common) {
                    return -1;
                }
                if (a.name.common < b.name.common) {
                    return 1;
                }
                return 0;
            });
        },
        countryDescending: (state) => {
            state.countries.sort((a, b) => {
                if (a.name.common < b.name.common) {
                    return -1;
                }
                if (a.name.common > b.name.common) {
                    return 1;
                }
                return 0;
            });
        },


    },
})

export const countryActions = countrySlice.actions
const countryReducer = countrySlice.reducer;
export default countryReducer

