import { Box, Typography } from '@mui/material'

export default function Navbar() {
    return (
        <Box
            component={'header'}
            p={3}
        >
            <Typography
                variant='h1'
                component={'h1'}
            >
                Bot AI
            </Typography>
        </Box>
    )
}