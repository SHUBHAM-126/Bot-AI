import { TextField, Box, Button, Stack } from '@mui/material'
import { useEffect, useState, useRef } from 'react'

export default function ChatInput({ generateResponse }) {

    const [input, setInput] = useState('')
    const inputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        generateResponse(input)
        setInput('')
    }

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <Box flexShrink={0} px={3} pb={3}>
            <Box component={'form'} onSubmit={handleSubmit}>
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
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        required
                        inputRef={inputRef}
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