import {Box, Stack, Typography} from '@mui/material';
import InitialChat from '../../components/InitialChat/InitialChat';

export default function Home() {
    return (
        <Box p={3}>
            <Typography
                variant='h1'
                component={'h1'}
            >
                Bot AI
            </Typography>

            <Stack>
                <InitialChat />
            </Stack>

        </Box>
    )
}