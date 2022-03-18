import React from "react"
import { useRoutes } from './routes'
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './contexts/AuthContext'

function App() {

  const { login, logout, userId, token } = useAuth()

  const isAuthenticated = !!token
  // console.log(isAuthenticated)
  const route = useRoutes(isAuthenticated)

  return (
    <AuthContext.Provider value={{  
      token, login, logout, userId, isAuthenticated
    }}>
      <div>
        { route }
      </div>
    </AuthContext.Provider>
  );
}

export default App;
