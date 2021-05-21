import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ChatMessageType, sendMessage, startMessagesListening, stopMessagesListening} from "../../redux/chat-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {ChatMessageAPIType, StatusType} from "../../api/chat-api";

const ChatPage = () => {
    return (
        <div>
            <Chat/>
        </div>
    )
}

const Chat = () => {

    const status = useSelector<AppRootStateType, StatusType>(state => state.chat.status)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    })

    return (
        <div>
            {status === 'error' && <div>Some error occured. Please refresh the page</div>}
            <>
                <Messages/>
                <AddMessageForm/>
            </>
        </div>
    )
}
const Messages = () => {

    const messages = useSelector<AppRootStateType, ChatMessageType[]>(state => state.chat.messages)
    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    const [isAutoScroll, setIsAutoScroll] = useState(true)
    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget
        if(Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300){
            !isAutoScroll && setIsAutoScroll(true)
        } else {
            isAutoScroll && setIsAutoScroll(false)

        }
    }

    useEffect(() => {
        if(isAutoScroll){
            messagesAnchorRef.current?.scrollIntoView({behavior: "smooth"})
        }
    }, [messages])

    return (
        <div style={{height: '400px', overflowY: 'auto'}} onScroll={scrollHandler}>
            {messages.map((m, index) => <Message key={m.id} message={m}/>)}
            <div ref={messagesAnchorRef}></div>
        </div>
    )
}

const Message: React.FC<{ message: ChatMessageAPIType }> = React.memo(({message}) => {
    return (
        <div>
            <img src={message.photo} style={{width: "30px"}} alt='img'/> <b>{message.userName}</b>
            <br/>
            {message.message}
            <hr/>
        </div>
    )
})
const AddMessageForm = () => {

    const [message, setMessage] = useState("")
    const status = useSelector<AppRootStateType, StatusType>(state => state.chat.status)

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
                <button disabled={status !== 'ready'} onClick={sendMessageHadler}>Send</button>
            </div>
        </div>
    )
}


export default ChatPage