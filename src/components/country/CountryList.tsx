import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { AppDispatch, RootState } from '../../redux/store';
import { fetchCountryData } from '../../redux/thunk/country';
import CountryItem from "./CountryItem";
import { Country } from '../../types/Type';
import { countryActions } from '../../redux/slice/countrySlice'
import Search from '../search/Search'
import Loading from '../loading/Loading'

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { IconButton } from "@mui/material";
import Paper from "@mui/material/Paper";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export default function CountryList() {

    const getData = useSelector((state: RootState) => state.countryItem.countries);
    const isLoading = useSelector((state: RootState) => state.countryItem.isLoading);
    const getUserData = useSelector(
        (state: RootState) => state.userItem.userInput
    );
    const disPatch = useDispatch<AppDispatch>();
    const normalDispatch = useDispatch;

    useEffect(() => {
        disPatch(fetchCountryData());
        disPatch(countryActions.getCountryDataPending());
    }, [disPatch]);

    const [filteredCountry, setFilteredCountry] = useState<Country[]>([]);

    useEffect(() => {
        const searchedCountry = getData.filter((country) =>
            country.name.common.toLocaleLowerCase().includes(getUserData.toLocaleLowerCase())
        );
        setFilteredCountry(searchedCountry);
    }, [getUserData,getData]);

    let countryData;

    if (getUserData==='') {
        countryData = getData;

    } else {
        countryData = filteredCountry;
    }
    function countryDescending() {
        disPatch(countryActions.countryDescending());
    }
    function countryAscending() {
        disPatch(countryActions.countryAscending());
    }

            return (
        <div>
            {isLoading ? <Loading/> : ""}
            <div>
                <Search/>
            </div>
            <TableContainer component={Paper}>
                <Table
                    sx={{ minWidth: 800 }}
                    aria-label="customized table"
                    className="CountryTable"
                >
                    <TableHead className=".table thead">
                        <TableRow>
                            <StyledTableCell className="flag" align="center">
                                Flag
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                Name{" "}
                                <IconButton onClick={countryDescending}>
                                    <ArrowDownwardIcon fontSize="small" />
                                </IconButton>
                                <IconButton onClick={countryAscending}>
                                    <ArrowUpwardIcon fontSize="small" />
                                </IconButton>
                            </StyledTableCell>
                            <StyledTableCell align="center">Region</StyledTableCell>
                            <StyledTableCell align="center">Population</StyledTableCell>

                            <StyledTableCell align="center">Languages</StyledTableCell>

                            <StyledTableCell align="center"/>
                            <StyledTableCell align="center"/>
                        </TableRow>
                    </TableHead>

                    <TableBody className="table-body">
                        {countryData.map((countryItems) => (
                            <CountryItem
                                key={crypto.randomUUID()}
                                countryData={countryItems}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
