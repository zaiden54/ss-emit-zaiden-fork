import React from "react"
import { useRoutes } from './routes'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from './redux/slices/authSlice'

function App() {

  const userData = JSON.parse(localStorage.getItem('userData'))
  const dispatch = useDispatch()

  dispatch(authActions.setAuth({...userData}))
  // console.log(userData);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  // console.log(isAuthenticated)
  const route = useRoutes(isAuthenticated)

  return (
    <div>
      { route }
    </div>
  );
}

export default App;
