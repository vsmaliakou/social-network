import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../Common/FormsControls/FormsControls";

const maxLength100 = maxLengthCreator(100)

const AddMessageForm: React.FC<InjectedFormProps> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name="newMessageBody"
                    placeholder="Enter your message"
                    validate={[requiredField, maxLength100]}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)
