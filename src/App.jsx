import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";

import React from 'react'

const App = () => {
  return (
    <RouterProvider router={AppRouter} />
  )
}

export default App