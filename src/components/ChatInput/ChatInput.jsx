import { TextField, Box, Button, Stack, Snackbar } from '@mui/material'
import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function ChatInput({ generateResponse, setScroll, chat, clearChat }) {

    const [input, setInput] = useState('')
    const inputRef = useRef(null)
    const [showSnackbar, setShowSnackbar] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        generateResponse(input)
        setInput('')
        setScroll(prev => !prev)
    }

    const handleSave = () => {

        const chat_history = JSON.parse(localStorage.getItem('chat')) || []

        const date = new Date()

        localStorage.setItem('chat', JSON.stringify([{ chat: chat, datetime: date }, ...chat_history]))

        clearChat()

        setShowSnackbar(true)
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
                        onClick={handleSave}
                        disabled={!chat.length > 0}
                    >
                        Save
                    </Button>
                </Stack>
            </Box>

            <Snackbar
                open={showSnackbar}
                message={'Chat saved.'}
                onClose={() => setShowSnackbar(false)}
                autoHideDuration={5000}
                action={
                    <Link to="/history">
                        <Button size='small'>See past conversations</Button>
                    </Link>
                }
            />
        </Box>
    )
}