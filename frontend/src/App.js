import React from "react"

import { useRoutes } from './routes'


function App() {

  const route = useRoutes()

  return (
      <div>
        { route }
      </div>
  );
}

export default App;
