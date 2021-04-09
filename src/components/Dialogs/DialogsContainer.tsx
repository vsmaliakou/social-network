import React from 'react';
import {sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {compose} from "redux";
import {AppRootStateType} from "../../redux/redux-store";

let mapStateToProps = (state: AppRootStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {sendMessage, updateNewMessageBody}),
    withAuthRedirect
)(Dialogs)