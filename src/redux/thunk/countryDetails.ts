import { AppDispatch } from "../store";
import { countryDetailsAction } from "../slice/countryDetailsSlice";



export function fetchCountryDetails(url: string) {
    return async (dispatch: AppDispatch) => {
        dispatch(countryDetailsAction.getCountryDataPending());
        const response = await fetch(url);
        const countryData = await response.json();
        dispatch(countryDetailsAction.getCountryData(countryData));
    };
}

