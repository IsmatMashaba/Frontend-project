import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";

import {fetchCountryData} from "../../redux/thunk/countryThunk";
import CountryItem from "./CountryItem";

export default function CountryList (){
     // get the array of 250 objects
    const countryList = useSelector(
        (state:RootState)=>state.country.countries)
    console.log(countryList)// empty array, we have to call fetchCountryData
    //function go get the array with 250 object

    //because we use useEffect hook to deal with fetching data
    //dispatch- AppDispatch
    const dispatch = useDispatch<AppDispatch>()
    useEffect(()=>{
      dispatch(fetchCountryData())
    },[dispatch])
    return (
        <div>
            {/*{countryList.map((countries)=>{
                <CountryItem countryItem={countries}/>
            })}*/}

            {countryList.map((countries) => (
                <CountryItem /*key={crypto.randomUUID()}*/ countryItem={countries} />
            ))}
        </div>
    )
}
