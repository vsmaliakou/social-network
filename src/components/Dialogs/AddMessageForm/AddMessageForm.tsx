import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Textarea} from "../../Common/FormsControls/FormsControls";
import {NewMessageFormValuesType} from "../Dialogs";

const maxLength100 = maxLengthCreator(100)

type NewMessageFormKeysType = Extract<keyof NewMessageFormValuesType, string>
type PropsType = {}

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<NewMessageFormKeysType>("Enter your message", "newMessageBody", Textarea, [requiredField, maxLength100])}
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm<NewMessageFormValuesType, PropsType>({form: "dialogAddMessageForm"})(AddMessageForm)
