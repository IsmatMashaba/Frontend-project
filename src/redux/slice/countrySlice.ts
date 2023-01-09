import {createSlice,PayloadAction} from "@reduxjs/toolkit";

import {Country} from "../../types/Type";


type InitialState= {
    countries: Country [];
    isLoading: boolean;
}

const initialState: InitialState = {
    countries: [],
    isLoading:false
};

const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
      // get data
        getCountryData: (state,actions)=> {
            // logic : fetch/axios
            //actions.payload = getCountryData(countryData) from thunk


            //update the state from []=>[{},{}]
            /*console.log(actions.payload)*/
            //access the initial state which is county and update it to new state which is actions.payload
            state.countries = actions.payload

            state.isLoading=false
        },
        getCountryDataPending: (state)=>{
            state.isLoading = true
        }
    },
})

export const countryActions = countrySlice.actions

/*export const {searchActions} = countrySlice.actions*/
const countryReducer = countrySlice.reducer;
export default countryReducer

