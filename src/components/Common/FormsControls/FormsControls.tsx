import React from "react";
import s from './FormsControls.module.css'
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
        error: undefined
        touched: boolean
    }
}

const FormControl: React.FC<FormControlType> = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
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

export const createField = (placeholder: string , name: string, component: React.FC<FormControlType>, validate: Array<((value: any) => string | undefined)>, type?: string) => {
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