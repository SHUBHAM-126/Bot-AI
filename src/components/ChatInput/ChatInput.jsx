import { TextField, Box, Button, Stack } from '@mui/material'

export default function ChatInput() {
    return (
        <Box flexShrink={0} px={3} pb={3}>
            <Box component={'form'}>
                <Stack
                    direction={'row'}
                    spacing={2}
                >
                    <TextField
                        placeholder='Message Bot AI...'
                        sx={{
                            flex: 1,
                            bgcolor: 'primary.light'
                        }}
                    />
                    <Button
                        variant='contained'
                        type='submit'
                    >
                        Ask
                    </Button>
                    <Button
                        variant='outlined'
                    >
                        Save
                    </Button>
                </Stack>
            </Box>
        </Box>
    )
}