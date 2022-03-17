import React from "react"
import { useRoutes } from './routes'


function App() {

  const isAuthenticated = true
  const route = useRoutes(isAuthenticated)

  return (
      <div>
        { route }
      </div>
  );
}

export default App;
