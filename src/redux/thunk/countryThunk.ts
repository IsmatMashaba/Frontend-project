import React from "react";

import {AppDispatch} from '../store'
import {countryActions} from "../slice/country";


// this file we will fetch data
// get list of the countries: []

//inside countryActions we have getCountryData

const url= 'https://restcountries.com/v3.1/all'
export function fetchCountryData(){
    return async (dispatch : AppDispatch) => {
        //get data from fetch
        const response = await fetch(url)
        const countryData = await response.json();
        //dispatch in component and sending it to countrySlice
        dispatch(countryActions.getCountryData(countryData))

        //calling getCountryData() from reducer and as parameter passing countryData
    }

}

