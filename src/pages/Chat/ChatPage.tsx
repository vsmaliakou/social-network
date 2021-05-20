import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {sendMessage, startMessagesListening, stopMessagesListening} from "../../redux/chat-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {ChatMessageType} from "../../api/chat-api";

const ChatPage = () => {
    return (
        <div>
            <Chat/>
        </div>
    )
}

const Chat = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    })

    return (
        <div>
            <Messages/>
            <AddMessageForm/>
        </div>
    )
}
const Messages = () => {

    const messages = useSelector<AppRootStateType, ChatMessageType[]>(state => state.chat.messages)

    return (
        <div style={{height: '400px', overflowY: 'auto'}}>
            {messages.map((m, index) => <Message key={index} message={m}/>)}
        </div>
    )
}

const Message: React.FC<{ message: ChatMessageType }> = ({message}) => {
    return (
        <div>
            <img src={message.photo} style={{width: "30px"}} alt='img'/> <b>{message.userName}</b>
            <br/>
            {message.message}
            <hr/>
        </div>
    )
}
const AddMessageForm = () => {

    const [message, setMessage] = useState("")

    const dispatch = useDispatch()

    const sendMessageHadler = () => {
        if (!message) {
            return
        }
        dispatch(sendMessage(message))
        setMessage("")
    }

    return (
        <div>
            <div>
                <textarea value={message} onChange={e => setMessage(e.currentTarget.value)}></textarea>
            </div>
            <div>
                <button disabled={false} onClick={sendMessageHadler}>Send</button>
            </div>
        </div>
    )
}


export default ChatPage