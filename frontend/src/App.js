import React from "react"
import { useRoutes } from './routes'
import { useAuth } from './hooks/auth.hook'

function App() {

  const { login, logout, userId, token } = useAuth()

  const isAuthenticated = !!token
  const route = useRoutes(isAuthenticated)

  return (
    <div>
      { route }
    </div>
  );
}

export default App;
