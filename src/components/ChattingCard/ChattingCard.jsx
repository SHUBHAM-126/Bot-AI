import { Box, Stack, Typography, IconButton, Rating } from '@mui/material'
import ai from '../../assets/bot.png'
import human from '../../assets/person.png'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { useState } from 'react';

export default function ChattingCard({ details, showFeedbackModal }) {

    const [isRating, setIsRating] = useState(false)
    const [rating, setRating] = useState(0)

    return (
        <Stack
            p={2}
            boxShadow={'0 0 4px rgba(0,0,0,0.1)'}
            borderRadius={1}
            direction={'row'}
            spacing={3}
            sx={{
                '&:hover .feedback-btns': {
                    visibility: 'visible',
                    opacity: 1
                }
            }}
        >
            <Box
                component={'img'}
                src={details.type == "AI" ? ai : human}
                height={68}
                width={68}
                borderRadius={'50%'}
                sx={{ objectFit: 'cover' }}
                flexShrink={0}
            />
            <Box>
                <Typography
                    variant='heading'
                    fontWeight={700}
                >
                    {details.type == "AI" ? 'Soul AI' : 'You'}
                </Typography>
                <Typography>
                    {details.text}
                </Typography>
                <Stack
                    direction={'row'}
                    gap={2}
                    alignItems={'center'}
                    mt={1}
                >
                    <Typography
                        fontSize={12}
                        color={'text.secondary'}
                    >
                        {details.time}
                    </Typography>

                    {details.type == "AI" && (
                        <Stack
                            direction={'row'}
                            visibility={'hidden'}
                            sx={{ opacity: 0, transition: 'opacity 400ms ease' }}
                            className='feedback-btns'
                        >
                            <IconButton
                                size='small'
                                onClick={() => setIsRating(prev => !prev)}
                            >
                                {!isRating && <ThumbUpOffAltIcon fontSize='inherit' />}
                                {isRating && <ThumbUpAltIcon fontSize='inherit' />}
                            </IconButton>
                            <IconButton
                                size='small'
                                onClick={showFeedbackModal}
                            >
                                <ThumbDownOffAltIcon fontSize='inherit' />
                            </IconButton>
                        </Stack>
                    )}

                </Stack>

                {(isRating && details.type == "AI") && (
                    <Box pt={3}>
                        <Typography
                            component={'legend'}
                            fontSize={12}
                        >
                            Rate this response
                        </Typography>
                        <Rating
                            name="simple-controlled"
                            value={rating}
                            onChange={(event, newValue) => {
                                setRating(newValue)
                            }}
                            sx={{
                                width: 'auto'
                            }}
                        />
                    </Box>
                )}

            </Box>
        </Stack>
    )
}