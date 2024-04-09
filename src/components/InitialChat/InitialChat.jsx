import { Box, Typography, Stack, Grid } from '@mui/material'
import icon from '../../assets/bot.png'
import Card from './Card'

export default function InitialChat() {

    const initialData = [
        {
            heading: 'Hi, what is the weather',
            subtext: 'Get immediate AI generated response'
        },
        {
            heading: 'Hi, what is my location',
            subtext: 'Get immediate AI generated response'
        },
        {
            heading: 'Hi, what is the temperature',
            subtext: 'Get immediate AI generated response'
        },
        {
            heading: 'Hi, how are you',
            subtext: 'Get immediate AI generated response'
        },
    ]


    return (
        <Box>
            <Stack
                alignItems={'center'}
                spacing={2}
                my={5}
            >
                <Typography variant='h2'>
                    How Can I Help You Today?
                </Typography>
                <Box
                    component={'img'}
                    src={icon}
                    height={70}
                    width={70}
                    boxShadow={4}
                    borderRadius={'50%'}
                />
            </Stack>
            <Grid container spacing={3}>
                {initialData.map(item => (
                    <Grid item key={item.heading} xs={12} md={6}>
                        <Card heading={item.heading} subtext={item.subtext} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}