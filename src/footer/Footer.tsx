import React from "react";
import {Link} from "react-router-dom";

import PublicIcon from '@mui/icons-material/Public';
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from '@mui/icons-material/Home';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";


export default function Footer(){

    return (
        <div className='footer'>
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
                                <FavoriteIcon/>{" "}
                            </Link>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>

    )
}

