import React from 'react';
import {ActionType, DialogsPageType} from "../../redux/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

export type DialogsContainerType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionType) => void
}

const DialogsContainer: React.FC<DialogsContainerType> = (props) => {

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (body: string) => {
        props.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs dialogsPage={props.dialogsPage}
                 sendMessage={onSendMessageClick}
                 updateNewMessageBody={onNewMessageChange}
        />
    )
}

export default DialogsContainer