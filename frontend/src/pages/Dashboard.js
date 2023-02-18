import React, { useState, useEffect, useContext } from "react";
import { BigTitle } from "../components/BigTitle";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useHttp } from "../hooks/http.hooks";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/slices/authSlice";

export const DashBoard = (props) => {
	const { request } = useHttp();
	const dispatch = useDispatch();

	const [user, setUser] = useState({
		name: "",
		mail: "",
	});

	if (props.user) {
		setUser({
			...user,
			name: props.name,
			mail: props.mail,
		});
	}

	useEffect(() => {
		setTimeout(async () => {
			const data = JSON.parse(localStorage.getItem("userData"));
			const userData = await request("/api/user/info?userId=" + data.userId);

			if (userData) {
				setUser({
					...user,
					name: userData.name,
					mail: userData.login,
				});
			}
		}, 500);
	}, []);

	const handleLogout = () => {
		dispatch(authActions.setAuth());
		localStorage.clear("userData");
	};

	return (
		<div className="dashboard">
			<Navbar />
			<div className="">
				<BigTitle title={"Личный кабинет"} />
				<BigTitle title={user.name} />
				<div className="logout-button">
					<button onClick={handleLogout}>Выйти</button>
				</div>
			</div>
			<Footer />
		</div>
	);
};
