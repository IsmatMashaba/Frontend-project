import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { AppDispatch, RootState } from '../../redux/store';
import { fetchCountryData } from '../../redux/thunk/country';
import CountryItem from "./CountryItem";
import { Country } from '../../types/Type';
import { countryActions } from '../../redux/slice/countrySlice'
import Search from '../../components/Search/Search'

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


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
    //displaying the data
    const getData = useSelector((state: RootState) => state.countryItem.countries);

    const disPatch = useDispatch<AppDispatch>();
    useEffect(() => {
        disPatch(fetchCountryData());
        disPatch(countryActions.getCountryDataPending());
    }, [disPatch]);

    //updating the user data according to filter in search
    const getUserData = useSelector(
        (state: RootState) => state.userItem.userInput
    );
    const [filteredCountry, setFilteredCountry] = useState<Country[]>([]);

    let search;

    useEffect(() => {
        const searchedCountry = getData.filter((country) =>
            country.name.common.toLocaleLowerCase().includes(getUserData.toLocaleLowerCase())
        );
        setFilteredCountry(searchedCountry);
    }, [getUserData, getData]);


    if (!getUserData) {
        search = getData;
        /*return <div>
            Sorry we have not got this recipe yet!
        </div>*/
    } else {
        search = filteredCountry;
    }

    return (
        <div>
            <div>
                <Search/>
            </div>
            <TableContainer component={Paper}>
                <Table
                    sx={{ minWidth: 800 }}
                    aria-label="customized table"
                    className="CountryTable"
                >
                    <TableHead>
                        <TableRow>
                            <StyledTableCell className="flag">Flag</StyledTableCell>
                            <StyledTableCell align="right">Name</StyledTableCell>
                            <StyledTableCell align="right">Region</StyledTableCell>
                            <StyledTableCell align="right">Population</StyledTableCell>

                            <StyledTableCell align="right">Languages</StyledTableCell>

                            <StyledTableCell align="right"/>
                            <StyledTableCell align="right"/>
                        </TableRow>
                    </TableHead>

                    <TableBody className="table-body">
                        {search.map((countryItems) => (
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