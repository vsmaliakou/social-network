import React from "react";
import s from './FormsControls.module.css'
import {requiredField} from "../../../utils/validators/validators";
import {Field} from "redux-form";

type FormControlType = {
    input: {
        name: string
        onBlur: () => void
        onChange: () => void
        onDragStart: () => void
        onDrop: () => void
        onFocus: () => void
        value: string
    }
    meta: {
        active: boolean
        asyncValidating: boolean
        autofilled: boolean
        dirty: boolean
        dispatch: () => void
        error: undefined
        form: string
        initial: undefined
        invalid: boolean
        pristine: boolean
        submitFailed: boolean
        submitting: boolean
        touched: boolean
        valid: boolean
        visited: boolean
        warning: undefined
    }
}

const FormControl: React.FC<FormControlType> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea: React.FC<FormControlType> = (props) => {
    const {input, meta, ...restProps} = props
    return (
        <div>
            <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
        </div>
    )
}
export const Input: React.FC<FormControlType> = (props) => {
    const {input, meta, ...restProps} = props
    return (
        <div>
            <FormControl {...props}><input {...input} {...restProps}/></FormControl>
        </div>
    )
}

export const createField = (placeholder: string, name: string, component: React.FC<FormControlType>, validate: Array<((value: any) => string | undefined)>, type?: string) => {
    return <div>
        <Field
            placeholder={placeholder}
            name={name}
            component={component}
            validate={validate}
            type={type}
        />
    </div>
}