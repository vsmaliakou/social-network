import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
            store => {
                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                }
                let onNewMessageChange = (body: string) => {
                    store.dispatch(updateNewMessageBodyCreator(body))
                }
                return <Dialogs dialogsPage={store.getState().dialogsPage}
                                sendMessage={onSendMessageClick}
                                updateNewMessageBody={onNewMessageChange}
                />
            }
        }
        </StoreContext.Consumer>
    )
}


export default DialogsContainer