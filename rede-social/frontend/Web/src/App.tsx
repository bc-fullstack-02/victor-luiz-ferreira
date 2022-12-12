import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from "./Pages/Login";
import { SignUp } from './Pages/SignUp';

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  }
])

function App() {
  return <RouterProvider router ={router} />
}

export default App;
