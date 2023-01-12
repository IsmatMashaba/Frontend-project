
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import FavouriteItem from '../favourite/FavouriteItem'


import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export default function FavouriteList(){
    const favouriteItems = useSelector((state:RootState)=>state.favouriteItem.countries)

    return (
        <div>
            <TableContainer component={Paper}>
                <Table
                    sx={{ minWidth: 800 }}
                    aria-label="customized table"
                    className="CountryTable"
                    >
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Flag</StyledTableCell>
                            <StyledTableCell align="right">Name</StyledTableCell>
                            <StyledTableCell align="right">Region</StyledTableCell>
                            <StyledTableCell align="right">Population</StyledTableCell>

                            <StyledTableCell align="right">Languages</StyledTableCell>

                            <StyledTableCell align="right"/>
                            <StyledTableCell align="right"/>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {favouriteItems.map((item)=>(
                            <FavouriteItem  item={item}/>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>

        </div>
    )
}
