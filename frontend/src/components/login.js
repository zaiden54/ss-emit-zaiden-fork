import React, { useState } from "react"
import { useHttp } from '../hooks/http.hooks'

export const Login = () => {

    const { request } = useHttp()

    const [passwordVisibility, setPasswordVisibility] = useState(false)
    const [loginVisibility, switchLogin] = useState(true)
    const [authForm, setAuthForm] = useState({
        login:'',
        password:''
    })
    const [regForm, setRegForm] = useState({
        name:'',
        email:'',
        password:''
    })

    const showPassword = () => {
        if (passwordVisibility === false) {
            return(setPasswordVisibility(true))
        }
        return(setPasswordVisibility(false))
        // console.log(passwordVisibility);        
    }

    const switchToLogin = () => {
        if (loginVisibility === false) {
            return(switchLogin(true))
        }
        // console.log(loginVisibility);
    }

    const switchToReg = () => {
        if (loginVisibility === true) {
            return(switchLogin(false))
        }
    }

    const handleAuthChange = (evt) => {
        setAuthForm({
            ...authForm,
            [evt.target.name]:evt.target.value
        })
        // console.log(authForm);
    }

    const handleRegChange = (evt) => {
        setRegForm({
            ...regForm,
            [evt.target.name]:evt.target.value
        })
    }

    const sendForm = (form) => {
        request('/api/auth/register', 'post', form)
    }

    const sendAuthForm = () => {
        sendForm(authForm)
        console.log(authForm);
    }

    const sendRegForm = () => {
        sendForm(regForm)
    }

    return (
        
        <div className="Login">
            
            <div className="login-block">
                <div className="auth-block">
                    
                    <div className='auth-wrapper'>
                       
                        <div className="login-header"><p onClick={switchToLogin} className={(loginVisibility ? 'auth-text' : '')}>Вход</p><p onClick={switchToReg} className={(loginVisibility ? '' : 'auth-text')}>Регистрация</p></div>
                        
                        <div className={"auth-block-content " + (loginVisibility ? 'auth-visible' : '')}>
                            <input className="auth-login" name='login' type="email" placeholder="Почта*" onChange={handleAuthChange}/>
                            <div className="password-input"><input className="auth-password" type={passwordVisibility ? 'text' : 'password'} placeholder="Пароль*" onChange={handleAuthChange} name='password'/><p onClick={showPassword}>Показать пароль</p></div>
                            <button className="auth-button"><p onClick={sendAuthForm}>Войти</p></button>
                        </div>
                        
                        <div className={"reg-block-content " + (loginVisibility ? '' : 'auth-visible')}>
                            <input className="auth-login" type="text" placeholder="ФИО*" name='name' onChange={handleRegChange}/>
                            <input className="auth-login" type="email" placeholder="Почта*" name='email' onChange={handleRegChange}/>
                            <div className="password-input"><input className="auth-password" type={passwordVisibility ? 'text' : 'password'} placeholder="Пароль*" name='password' onChange={handleRegChange}/><p onClick={showPassword}>Показать пароль</p></div>
                            <button className="auth-button"><p onClick={sendRegForm}>Регистрация</p></button>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )

}