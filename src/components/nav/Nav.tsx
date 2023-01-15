import React from "react";
import {Link} from "react-router-dom";
import {Country} from '../../types/Type'

import PublicIcon from '@mui/icons-material/Public';
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from '@mui/icons-material/Home';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import InfoIcon from '@mui/icons-material/Info';

type Props= {
    favouriteItem: Country[];
}


export default function Nav({ favouriteItem }: Props){
    const favouriteItemLength = favouriteItem.length;
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        sx={{ mr: 2 }}
                    >
                        <PublicIcon/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{display: {xs: "none", sm: "block"}}}
                    >
                        Countries
                    </Typography>
                    <Box sx={{flexGrow: 20}}/>
                    <Box sx={{display: {xs: "none", md: "flex"}}}>
                        <Link  to="">
                            {" "}
                            <HomeIcon/>
                        </Link>
                    </Box>
                    <Box sx={{flexGrow: 1}}/>
                    <Box sx={{display: {xs: "none", md: "flex"}}}>
                        <Link  to="/favorite">
                            <Badge badgeContent={favouriteItemLength} color="secondary">
                                <IconButton />

                                <FavoriteIcon
                                    className="favIcon"
                                    sx={{ color: favouriteItemLength > 0 ? "pink[500]" : "white" }}
                                />
                            </Badge>
                        </Link>
                    </Box>
                    <Box sx={{flexGrow: 1}}/>
                    <Box sx={{display: {xs: "none", md: "flex"}}}>
                        <Link  to="/about">
                            {" "}
                            <InfoIcon/>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
