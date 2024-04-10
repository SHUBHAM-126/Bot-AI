import { Box, Stack, Typography, Modal, IconButton, TextField, Button } from '@mui/material'
import FeedbackIcon from '@mui/icons-material/Feedback';
import CloseIcon from '@mui/icons-material/Close';

export default function FeedbackModal({open, handleClose}) {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '95%',
        bgcolor: 'primary.bgtheme',
        boxShadow: 24,
        p: 3,
        maxWidth: 720,
        borderRadius: '10px'
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style} position={'relative'}>
                <IconButton
                    sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10
                    }}
                    onClick={handleClose}
                >
                    <CloseIcon />
                </IconButton>
                <Stack direction={'row'} spacing={2} alignItems={'center'}>
                    <FeedbackIcon />
                    <Typography variant={'heading'} fontSize={18}>
                        Provide Additional Feedback
                    </Typography>
                </Stack>

                <Box
                    component='form'
                    pt={3}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: "flex-end",
                        gap: '12px'
                    }}
                >
                    <TextField
                        multiline
                        rows={6}
                        sx={{ width: 1 }}
                        required
                    />
                    <Button
                        variant='contained'
                        type='submit'
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
        </Modal>
    )
}