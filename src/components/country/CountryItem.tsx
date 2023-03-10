import React, {useState} from "react";
import {Country} from '../../types/Type'
import {RootState} from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import favouriteActions from "../../redux/slice/favouriteSlice";

import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import { pink } from "@mui/material/colors";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },

    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

type Props = {
    countryData: Country
}

export default function CountryItem({ countryData }: Props) {
    const [open, setOpen] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };
    const getData = useSelector((state: RootState) => state.favouriteItem);

    const favDispatch = useDispatch();
    let isFavorite = getData.favouriteCountries.some(
        (item) =>
            item.name.common.toLocaleLowerCase() ===
            countryData.name.common.toLocaleLowerCase()
    );
    function getValue() {
        if (isFavorite) {
            setIsValid(false);
            setOpen(true);
            return;
        } else {
            setIsValid(true);
            setOpen(false);
            favDispatch(favouriteActions.addFavouriteItem(countryData));
        }
    }
    return (
        <Fragment>
            <StyledTableRow key={crypto.randomUUID()} className="CountryTable">
                <StyledTableCell component="th" scope="row" className="flag">
                    <img
                        src={countryData.flags.png}
                        alt={countryData.name.common}
                        className="flagImage"
                    />
                </StyledTableCell>
                <StyledTableCell align="right">
                    {countryData.name.common}
                </StyledTableCell>
                <StyledTableCell align="right">{countryData.region}</StyledTableCell>
                <StyledTableCell align="right">
                    {countryData.population}
                </StyledTableCell>
                <StyledTableCell align="right">
                    {countryData.languages ? (
                        Object.entries(countryData.languages).map(([key]) => (
                            <li key={crypto.randomUUID()}>{countryData.languages[key]}</li>
                        ))
                    ) : (
                        <li>No Languages</li>
                    )}
                </StyledTableCell>

                <StyledTableCell>
                    <IconButton
                        aria-label="add to favorites"
                        onClick={getValue}
                        sx={{ color: isFavorite ? pink[500] : "bluegray" }}
                    >
                        <FavoriteIcon />
                    </IconButton>

                    <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                        <Alert
                            onClose={handleClose}
                            severity="warning"
                            sx={{ width: "100%" }}
                        >
                            selected country already exists
                        </Alert>
                    </Snackbar>
                </StyledTableCell>
                <StyledTableCell>
                    {" "}
                    <Link to={`/countries/${countryData.name.common}`}>
                        More
                    </Link>{" "}
                </StyledTableCell>

            </StyledTableRow>
        </Fragment>
    );
}
