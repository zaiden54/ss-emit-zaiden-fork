import React, { useState } from "react";
import { useHttp } from "../hooks/http.hooks";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/slices/authSlice";

export const Login = () => {
	const dispatch = useDispatch();

	const { request, error, clearError } = useHttp();

	const [passwordVisibility, setPasswordVisibility] = useState(false);
	const [loginVisibility, switchLogin] = useState(true);
	const [authForm, setAuthForm] = useState({
		login: "",
		password: "",
	});
	const [regForm, setRegForm] = useState({
		name: "",
		login: "",
		password: "",
	});

	const showPassword = () => {
		if (passwordVisibility === false) {
			return setPasswordVisibility(true);
		}
		return setPasswordVisibility(false);
	};

	const switchToLogin = () => {
		if (loginVisibility === false) {
			return switchLogin(true);
		}
	};

	const switchToReg = () => {
		if (loginVisibility === true) {
			return switchLogin(false);
		}
	};

	const handleAuthChange = (evt) => {
		setAuthForm({
			...authForm,
			[evt.target.name]: evt.target.value,
		});
	};

	const handleRegChange = (evt) => {
		setRegForm({
			...regForm,
			[evt.target.name]: evt.target.value,
		});
	};

	const loginHandler = async () => {
		try {
			const data = await request("/api/auth/login", "POST", authForm);

			dispatch(
				authActions.setAuth({
					token: data.token,
					userId: data.userId,
				})
			);

			localStorage.setItem(
				"userData",
				JSON.stringify({
					token: data.token,
					userId: data.userId,
				})
			);
		} catch (err) {
			alert(error);
		}
	};

	const registerHandler = async () => {
		try {
			const data = await request("/api/auth/register", "POST", regForm);

			dispatch(
				authActions.setAuth({
					token: data.token,
					userId: data.userId,
				})
			);

			localStorage.setItem(
				"userData",
				JSON.stringify({
					token: data.token,
					userId: data.userId,
				})
			);
		} catch (err) {
			alert(error);
		}
	};

	return (
		<div className="Login">
			<div className="login-block">
				<div className="auth-block">
					<div className="auth-wrapper">
						<div className="login-header">
							<p onClick={switchToLogin} className={loginVisibility ? "auth-text" : ""}>
								Вход
							</p>
							<p onClick={switchToReg} className={loginVisibility ? "" : "auth-text"}>
								Регистрация
							</p>
						</div>

						<div className={"auth-block-content " + (loginVisibility ? "auth-visible" : "")}>
							<input
								className="auth-login"
								name="login"
								type="email"
								placeholder="Почта*"
								onChange={handleAuthChange}
							/>
							<div className="password-input">
								<input
									className="auth-password"
									type={passwordVisibility ? "text" : "password"}
									placeholder="Пароль*"
									onChange={handleAuthChange}
									name="password"
								/>
								<p onClick={showPassword}>Показать пароль</p>
							</div>
							<button className="auth-button">
								<p onClick={loginHandler}>Войти</p>
							</button>
						</div>

						<div className={"reg-block-content " + (loginVisibility ? "" : "auth-visible")}>
							<input
								className="auth-login"
								type="text"
								placeholder="ФИО*"
								name="name"
								onChange={handleRegChange}
							/>
							<input
								className="auth-login"
								type="email"
								placeholder="Почта*"
								name="login"
								onChange={handleRegChange}
							/>
							<div className="password-input">
								<input
									className="auth-password"
									type={passwordVisibility ? "text" : "password"}
									placeholder="Пароль*"
									name="password"
									onChange={handleRegChange}
								/>
								<p onClick={showPassword}>Показать пароль</p>
							</div>
							<button className="auth-button">
								<p onClick={registerHandler}>Регистрация</p>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
