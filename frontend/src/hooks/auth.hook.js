import { useState, useCallback, useEffect } from "react";

// const { login, logout } = useAuth()

export const useAuth = () => {
	const [token, setToken] = useState(null);
	const [userId, setUserId] = useState(null);

	// console.log('render')

	const login = useCallback((jwtToken, id) => {
		setToken(jwtToken);
		setUserId(id);

		localStorage.setItem(
			"userData",
			JSON.stringify({
				token: jwtToken,
				userId: id,
			})
		);
	}, []);

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem("userData"));

		if (data && data.token) {
			login(data.token, data.userId);
		}
	}, [login]);

	const logout = useCallback(() => {
		setToken(null);
		setUserId(null);

		localStorage.setItem(
			"userData",
			JSON.stringify({
				token: token,
				userId: userId,
			})
		);
	}, []);

	return { login, logout, userId, token };
};
