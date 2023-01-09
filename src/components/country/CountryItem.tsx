import React, {useState} from "react";
import {Country} from '../../types/Type'
import {RootState} from "../../redux/store";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Fragment } from "react";

import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";


/*import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";*/

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

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };
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
            </StyledTableRow>
        </Fragment>
    );
}
