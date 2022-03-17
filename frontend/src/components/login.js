import React, { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { useHttp } from '../hooks/http.hooks'

export const Login = () => {

    const { request } = useHttp()
    const auth = useContext(AuthContext)

    const [passwordVisibility, setPasswordVisibility] = useState(false)
    const [loginVisibility, switchLogin] = useState(true)
    const [authForm, setAuthForm] = useState({
        login:'',
        password:''
    })
    const [regForm, setRegForm] = useState({
        name:'',
        login:'',
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

    const loginHandler = async () => {
        // console.log(data)
        try {
            const data = await request('/api/auth/login', 'POST', authForm)
            auth.login(data.token, data.userId)
        } catch (error) {
            console.log(error.message);
        }
    }

    const registerHandler = async () => {
        // console.log(data)
        try {
            const data = await request('/api/auth/register', 'POST', regForm)
            // auth.login(data.token, data.userId)
            console.log(data);
        } catch (error) {
            console.log(error.message);
        }
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
                            <button className="auth-button"><p onClick={loginHandler}>Войти</p></button>
                        </div>
                        
                        <div className={"reg-block-content " + (loginVisibility ? '' : 'auth-visible')}>
                            <input className="auth-login" type="text" placeholder="ФИО*" name='name' onChange={handleRegChange}/>
                            <input className="auth-login" type="email" placeholder="Почта*" name='login' onChange={handleRegChange}/>
                            <div className="password-input"><input className="auth-password" type={passwordVisibility ? 'text' : 'password'} placeholder="Пароль*" name='password' onChange={handleRegChange}/><p onClick={showPassword}>Показать пароль</p></div>
                            <button className="auth-button"><p onClick={registerHandler}>Регистрация</p></button>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )

}