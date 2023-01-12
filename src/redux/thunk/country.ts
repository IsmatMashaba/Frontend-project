import {AppDispatch} from '../store'
import {countryActions} from "../slice/countrySlice";

const url= 'https://restcountries.com/v3.1/all'
export function fetchCountryData(){
    return async (disPatch : AppDispatch) => {
        disPatch(countryActions.getCountryDataPending());
        const response = await fetch(url)
        const countryData = await response.json();
        disPatch(countryActions.getCountryData(countryData))
    }
}

