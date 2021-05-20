import React, {useEffect, useState} from 'react';

export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

const ChatPage = () => {
    return (
        <div>
            <Chat/>
        </div>
    )
}

const Chat = () => {
    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null)
    useEffect(() => {
        let ws: WebSocket
        const closeHandler = () => {
            setTimeout(createChannel, 3000)
        }
        function createChannel() {
            ws?.removeEventListener('close', closeHandler)
            ws?.close()
            ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
            ws.addEventListener('close', closeHandler)
            setWsChannel(ws)
        }
        createChannel()
        return () => {
            ws.removeEventListener('close', closeHandler)
            ws.close()
        }
    }, [])

    return (
        <div>
            <Messages wsChannel={wsChannel}/>
            <AddMessageForm wsChannel={wsChannel}/>
        </div>
    )
}
type MessagesPropsType = {
    wsChannel: WebSocket | null
}
const Messages: React.FC<MessagesPropsType> = ({wsChannel}) => {

    const [messages, setMessages] = useState<ChatMessageType[]>([])

    useEffect(() => {
        let messageHandler = (e: MessageEvent) => {
            let newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        }
        wsChannel?.addEventListener('message', messageHandler)
        return () => {
            wsChannel?.removeEventListener('message', messageHandler)
        }
    }, [wsChannel])

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
type AddMessageFormPropsType = {
    wsChannel: WebSocket | null
}
const AddMessageForm: React.FC<AddMessageFormPropsType> = ({wsChannel}) => {

    const [message, setMessage] = useState("")
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')

    const openHandler = () => {
        setReadyStatus('ready')
    }

    useEffect(() => {
        wsChannel?.addEventListener('open', openHandler)
        return () => {
            wsChannel?.removeEventListener('open', openHandler)
        }
    }, [wsChannel])

    const sendMessage = () => {
        if (!message) {
            return
        }
        wsChannel?.send(message)
        setMessage("")
    }

    return (
        <div>
            <div>
                <textarea value={message} onChange={e => setMessage(e.currentTarget.value)}></textarea>
            </div>
            <div>
                <button disabled={wsChannel === null && readyStatus !== 'ready'} onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}


export default ChatPage