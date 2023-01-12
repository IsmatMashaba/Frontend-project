import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";


export default function Loading(){
    return(
        <div>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '10%',
                }}
            >
                <div className="loader">
                    <CircularProgress size='5rem' />
                    <h3>Loading..</h3>
                </div>
            </Box>
        </div>
    )

}
