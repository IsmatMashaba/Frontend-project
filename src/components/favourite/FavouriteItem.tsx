import React from "react";
import {Country} from "../../types/Type";
import { useState } from "react";
import { useDispatch } from "react-redux";
import favouriteActions from "../../redux/slice/favouriteSlice";
import { Fragment } from "react";

import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
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

type Prop= {
    item:Country
}


export default function FavouriteItem({item} : Prop){

    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    const dispatchFav = useDispatch();
    function handleRemove() {
        dispatchFav(favouriteActions.removeFavouriteItem(item.name.common));
        handleClick();
    }

    return (
        <Fragment>
            <StyledTableRow key={crypto.randomUUID()} className="CountryTable">
                <StyledTableCell component="th" scope="row">
                    <img
    src={item.flags.png}
    alt={item.name.common}
    className="flagImage"
    />
                </StyledTableCell>
                <StyledTableCell align="right">{item.name.common}</StyledTableCell>
                <StyledTableCell align="right">{item.region}</StyledTableCell>
                <StyledTableCell align="right">{item.population}</StyledTableCell>
                <StyledTableCell align="right">
                    {item.languages ? (
                        Object.entries(item.languages).map(([key]) => (
                            <li key={key}>{item.languages[key]}</li>
                        ))
                    ) : (
                        <li>No Languages</li>
                    )}
                </StyledTableCell>

                <StyledTableCell align="right">
                    <Button variant="contained" onClick={handleRemove}>
                        Remove
                    </Button>
                </StyledTableCell>

                <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                    <Alert
                        severity="success"
                        sx={{ width: "100%" }}
                        onClose={handleClose}
                    >
                        {item.name.common}
                        removed
                    </Alert>
                </Snackbar>
            </StyledTableRow>
        </Fragment>
    );
}
