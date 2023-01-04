import React from "react";
import {Country} from "../../types/type";

type Props = {
    countryItem: Country
}

export default function CountryItem ({countryItem}: Props){
    return (
        <div>
          <span><strong>Name</strong> : {countryItem.name.common} </span>

            <span><strong>Region:</strong>  {countryItem.region} </span>
            <span><strong>  Area:</strong>   {countryItem.area}</span>
         <span>
             <strong>  Languages:</strong>
             <ul>
                {countryItem.languages ? (
                    Object.entries(countryItem.languages).map(([key]) => (
                        <li key={key}>{countryItem.languages[key]}</li>
                    ))
                ) : (
                    <li>No Languages</li>
                )}
            </ul>
         </span>

            <img src={countryItem.flags.png} alt={countryItem.name.common}/>

        </div>
    )
}


