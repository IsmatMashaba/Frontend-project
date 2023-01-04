import React from "react";

import {createSlice,PayloadAction} from "@reduxjs/toolkit";

import {Country} from "../../types/type";


type InitialState= {
    countries: Country []
}

const initialState: InitialState = {
    countries: [],
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

        },
        //use component
    },
})

export const countryActions = countrySlice.actions

const reducer = countrySlice.reducer;
export default reducer

