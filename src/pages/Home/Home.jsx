import { Box, Stack, Typography } from '@mui/material';
import InitialChat from '../../components/InitialChat/InitialChat';
import ChatInput from '../../components/ChatInput/ChatInput';

export default function Home() {
    return (
        <Stack p={3} height={1}>
            <Typography
                variant='h1'
                component={'h1'}
            >
                Bot AI
            </Typography>

            <Stack height={1} justifyContent={'space-between'}>
                <InitialChat />
                <ChatInput />
            </Stack>

        </Stack>
    )
}