import React from "react";

import {AppDispatch} from '../store'
import {countryActions} from "../slice/countrySlice";


// this file we will fetch data
// get list of the countries: []

//inside countryActions we have getCountryData

const url= 'https://restcountries.com/v3.1/all'
export function fetchCountryData(){
    return async (disPatch : AppDispatch) => {
        disPatch(countryActions.getCountryDataPending());
        //get data from fetch
        const response = await fetch(url)
        const countryData = await response.json();
        //dispatch in component and sending it to countrySlice
        disPatch(countryActions.getCountryData(countryData))

        //calling getCountryData() from reducer and as parameter passing countryData
    }

}

