import React from "react";
import {Country} from "../../types/Type";

import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Fragment } from "react";

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
            </StyledTableRow>
        </Fragment>
    );
}
