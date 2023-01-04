import React from "react";
import {Country} from "../../types/type";

type Props = {
    countryItem: Country
}

export default function CountryItem ({countryItem}: Props){
    return (
        <div>
          <span>Name : {countryItem.name.common}</span>
            <span>Region: {countryItem.region}</span>
            <span>Area: {countryItem.area}</span>
            {/*<span>Languages: {countryItem.languages.toString()}</span>*/}
            <img src={countryItem.flags.png}/>

        </div>
    )
}
