import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../../redux/redux-store";
import s from '../Common/FormsControls/FormsControls.module.css'

type PropsType = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<FormDataType, PropsType> & PropsType> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", Input, [requiredField])}
            {createField("Password", "password", Input, [requiredField], "password")}
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
            </div>
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField("Symbols from image", "captcha", Input, [requiredField])}
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

type MapStateToProps = {
    isAuth: boolean
    captchaUrl: string | null
}
type MapDispatchToProps = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
    logout: () => void
}
type LoginType = MapStateToProps & MapDispatchToProps
type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
const Login: React.FC<LoginType> = (props) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state: AppRootStateType): MapStateToProps => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login, logout})(Login)



