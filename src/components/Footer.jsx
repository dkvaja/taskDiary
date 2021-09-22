import { Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
    return (
        <Typography variant='body2' align='center' sx={{
            position: 'fixed',
            bottom: '0',
            textAlign: 'center',
            width: '100vw',
            p: 2,
            fontWeight: 'bold'
        }} >
            Crafted with ❤️
        </Typography>
    )
}
