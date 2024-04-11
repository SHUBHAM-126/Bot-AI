import { useContext } from "react"
import { ThemeContext } from "../../theme/ThemeContext"
import { Typography, Box, Stack, Button } from '@mui/material'
import icon from '../../assets/newchat.png'
import { Link } from 'react-router-dom'
import AddCommentIcon from '@mui/icons-material/AddComment';

export default function Sidebar({ setChat }) {

    const { setMode } = useContext(ThemeContext)

    const handleMode = () => {
        setMode(prev => prev === 'light' ? 'dark' : 'light')
    }

    return (
        <Box>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
                <Stack
                    onClick={() => setChat([])}
                    sx={{
                        bgcolor: 'primary.main',
                        '&:hover ': {
                            bgcolor: 'primary.bg'
                        }
                    }}
                    direction={'row'}
                    spacing={1}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    py={2}
                    px={3}
                >
                    <Stack direction={'row'} gap={1} alignItems={'center'}>
                        <Box
                            component={'img'}
                            src={icon}
                            height={42}
                            width={42}
                            borderRadius={2}
                            boxShadow={4}
                            flexShrink={0}
                        />
                        <Typography
                            variant={'heading'}
                            fontSize={20}
                            color={'text.primary'}
                        >
                            New Chat
                        </Typography>
                    </Stack>

                    <AddCommentIcon sx={{ color: 'text.primary' }} />

                </Stack>
            </Link>

            <Box p={3}>
                <Link to={'/history'}>
                    <Button variant="contained" sx={{ width: 1 }}>
                        Past Conversations
                    </Button>
                </Link>
            </Box>

        </Box>
    )
}