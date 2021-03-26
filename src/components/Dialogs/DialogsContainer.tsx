import React from 'react';
import {sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/store";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {compose} from "redux";

let mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {sendMessage, updateNewMessageBody})
)(Dialogs)