import React from 'react';
import {sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/store";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)


export default connect(mapStateToProps, {
    sendMessage, updateNewMessageBody})(AuthRedirectComponent)