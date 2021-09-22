import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography
                        variant="h5"
                        noWrap
                        align='center'
                        fontWeight='bold'
                        component="div"
                        sx={{ flexGrow: 1}}
                    >
                        Task Diary
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}





