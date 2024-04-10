import { Box, Stack, Typography } from '@mui/material';
import InitialChat from '../../components/InitialChat/InitialChat';
import ChatInput from '../../components/ChatInput/ChatInput';
import ChattingCard from '../../components/ChattingCard/ChattingCard';
import FeedbackModal from '../../components/FeedbackModal/FeedbackModal';
import { useState } from 'react';
import data from '../../aiData/sampleData.json'

export default function Home() {

    const [showModal, setShowModal] = useState(false)

    // Format
    // {
    //  type:'AI/Human',
    //  text:'',
    //  time:''
    // }

    const [chat, setChat] = useState([])

    const generateResponse = (input) => {

        setChat(prev => ([...prev, {
            type: 'Human',
            text: input,
            time: '10:30pm'
        }]))

        const response = data.find(item => input.toLowerCase() == item.question.toLowerCase())

        let answer = "Sorry, Did not understand your query!"

        if (response != undefined) {
            answer = response.response
        }

        setChat(prev => ([...prev, {
            type: 'AI',
            text: answer,
            time: '10:30pm'
        }]))

    }

    return (
        <Stack height={'100vh'}>


            <Stack height={1} justifyContent={'space-between'}>

                <Typography
                    variant='h1'
                    component={'h1'}
                    p={3}
                >
                    Bot AI
                </Typography>

                {chat.length == 0 && <InitialChat generateResponse={generateResponse} />}

                {chat.length > 0 && (
                    <Stack
                        height={1}
                        flexGrow={0}
                        p={3}
                        spacing={3}
                        sx={{
                            overflowY: 'auto',
                            '&::-webkit-scrollbar': {
                                width: '10px',
                            },
                            '&::-webkit-scrollbar-track': {
                                boxShadow: 'inset 0 0 8px rgba(0,0,0,0.1)',
                                borderRadius: '8px'
                            },
                            '&::-webkit-scrollbar-thumb': {
                                backgroundColor: 'rgba(151, 133, 186,0.4)',
                                borderRadius: '8px'
                            }
                        }}
                    >
                        {chat.map((item, index) => (
                            <ChattingCard details={item} key={index} showFeedbackModal={() => setShowModal(true)} />
                        ))}
                    </Stack>
                )}

                <ChatInput />
            </Stack>

            <FeedbackModal open={showModal} handleClose={() => setShowModal(false)} />

        </Stack>
    )
}