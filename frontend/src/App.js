import React, { useEffect } from "react";
import { useRoutes } from "./routes";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./redux/slices/authSlice";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("userData"));
        dispatch(authActions.setAuth({ ...userData }));
    }, []);

    const isAuthenticated = !!useSelector((state) => state.auth.isAuthenticated);

    const route = useRoutes(isAuthenticated);

    return <div>{route}</div>;
}

export default App;
