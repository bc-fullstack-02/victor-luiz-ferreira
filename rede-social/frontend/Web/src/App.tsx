import {Login} from "./Pages/Login";
import "./index.css";

// Importar as rotas e explicação Aula 6 min 35:50 até 41
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SingUp } from "./Pages/SingUp";

// Importar Home aula 7
import { Home } from "./Pages/Home";

//  essa função vai criar a rota e receber 1 array de objetos de 2 parametros
const router = createBrowserRouter([
  {
    // Aki trokei de / ´pra login e ele não aceitou, não encotro a  rota então deixa / msm
    path: "/",
    element: <Login/>,
  },
  {
    path: "/singup",
    element: <SingUp/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
