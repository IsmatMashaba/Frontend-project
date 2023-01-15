import React from "react";
import FavouriteList from '../components/favourite/FavouriteList'

import { useSelector } from "react-redux";
import { RootState } from '../redux/store';
export default function Favorite() {
    const countData = useSelector(
        (state: RootState) => state.countryItem.countries
    );
    return (
        <div>
         <FavouriteList/>
        </div>
    )
}
