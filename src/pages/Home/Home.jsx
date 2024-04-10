import { Box, Stack, Typography } from '@mui/material';
import InitialChat from '../../components/InitialChat/InitialChat';
import ChatInput from '../../components/ChatInput/ChatInput';
import ChattingCard from '../../components/ChattingCard/ChattingCard';
import FeedbackModal from '../../components/FeedbackModal/FeedbackModal';
import { useEffect, useRef, useState } from 'react';
import data from '../../aiData/sampleData.json'

export default function Home() {

    const [showModal, setShowModal] = useState(false)
    const [chat, setChat] = useState([])
    const listRef = useRef(null)
    const [chatId, setChatId] = useState(1)
    const [selectedChatId, setSelectedChatId] = useState(null)

    // GENERATING AI RESPONSE
    const generateResponse = (input) => {

        const response = data.find(item => input.toLowerCase() == item.question.toLowerCase())

        let answer = "Sorry, Did not understand your query!"

        if (response != undefined) {
            answer = response.response
        }

        setChat(prev => ([...prev,
        {
            type: 'Human',
            text: input,
            time: '10:30pm',
            id: chatId
        },
        {
            type: 'AI',
            text: answer,
            time: '10:30pm',
            id: chatId + 1
        }
        ]))

        setChatId(prev => prev + 2)

    }

    //AUTOSCROLL TO LAST ELEMENT
    useEffect(() => {
        listRef.current?.lastElementChild?.scrollIntoView()
        console.log(chat)
    }, [chat])

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
                        ref={listRef}
                    >
                        {chat.map((item, index) => (
                            <ChattingCard details={item} key={index} updateChat={setChat} setSelectedChatId={setSelectedChatId} showFeedbackModal={() => setShowModal(true)} />
                        ))}
                    </Stack>
                )}

                <ChatInput generateResponse={generateResponse} />
            </Stack>

            <FeedbackModal open={showModal} updateChat={setChat} chatId={selectedChatId} handleClose={() => setShowModal(false)} />

        </Stack>
    )
}