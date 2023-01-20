
import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { AppDispatch } from '../redux/store';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RootState } from "../redux/store";
import {fetchCountryDetails} from "../redux/thunk/countryDetails";
import { countryDetailsAction } from '../redux/slice/countryDetailsSlice';
import Loading from '../components/loading/Loading';

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";



export default function CountryDetails() {
    const {name} = useParams(); //it gives us object
    console.log(name, 'name')
    const countryUrl= `https://restcountries.com/v3.1/name/${name}`;

    const getData = useSelector(
        (state: RootState) => state.countryDetails.countryItem
    );

    const isLoading = useSelector(
        (state: RootState) => state.countryDetails.isLoading
    );
    const dispatchData = useDispatch<AppDispatch>();

    useEffect(() => {
        console.log("hello")
        dispatchData(fetchCountryDetails(countryUrl));
    }, [dispatchData, countryUrl]);


    return (
        <div className="Details">
            {isLoading ? <Loading/> : ""}
            <p>{getData[0]?.name?.common}</p>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            {getData[0]?.name?.common}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={getData[0]?.name?.common}
                    subheader={getData[0]?.capital}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={getData[0]?.flags?.png}
                    alt="image"
                />

                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        <li>
                            Name:<strong>{getData[0]?.name?.common}</strong>
                        </li>
                        <li>
                            Capital:<strong>{getData[0]?.capital}</strong>
                        </li>
                        <li>
                            {" "}
                            Region:<strong>{getData[0]?.region}</strong>
                        </li>
                        <li>
                            Population:<strong>{getData[0]?.population}</strong>
                        </li>

                        <li>
                            languages:
                            <strong>
                                {getData[0]?.languages ? (
                                    Object.entries(getData[0]?.languages)?.map(([key]) => (
                                        <li key={crypto.randomUUID()}>
                                            {getData[0]?.languages[key]}
                                        </li>
                                    ))
                                ) : (
                                    <li>No Languages</li>
                                )}
                            </strong>
                        </li>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}




















