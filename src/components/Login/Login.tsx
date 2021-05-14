import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, GetStringKeys, Input} from "../Common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../../redux/redux-store";
import s from '../Common/FormsControls/FormsControls.module.css'

type PropsType = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<FormDataType, PropsType> & PropsType> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>("Email", "email", Input, [requiredField])}
            {createField<LoginFormValuesTypeKeys>("Password", "password", Input, [requiredField], {type: "password"})}
            {createField<LoginFormValuesTypeKeys>(undefined, "rememberMe", Input, [], {type: "checkbox"}, "remember me")}

            {captchaUrl && <img src={captchaUrl} alt={"captcha"}/>}
            {captchaUrl && createField<LoginFormValuesTypeKeys>("Symbols from image", "captcha", Input, [requiredField], {})}

            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType, PropsType>({form: 'login'})(LoginForm)

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
type LoginFormValuesTypeKeys = GetStringKeys<FormDataType>

export const LoginPage = () => {

    const captchaUrl = useSelector<AppRootStateType, string | null>(state => state.auth.captchaUrl)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)

    const dispatch = useDispatch()



    const onSubmit = (formData: FormDataType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmit}/>
        </div>
    )
}