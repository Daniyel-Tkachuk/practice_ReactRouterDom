import {createBrowserRouter, Navigate} from "react-router-dom";
import {Error404} from "../components/pages/Error404";
import {App} from "../App";
import {Adidas} from "../components/pages/Adidas";
import {Abibas} from "../components/pages/Abibas";
import {Puma} from "../components/pages/Puma";

export const PATH= {
  ADIDAS: "/adidas",
  PUMA: "/puma",
  ABIBAS: "/abibas",
  PRICES: "/prices",
  ERROR: "/error404"
} as const

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error404/>,
    children: [
      {
        path: '/',
        element: <Navigate to={PATH.ADIDAS}/>
      },
      {
        path: PATH.ADIDAS,
        element: <Adidas/>
      },
      {
        path: PATH.PUMA,
        element: <Puma/>
      },
      {
        path: PATH.ABIBAS,
        element: <Abibas/>
      },
      {
        path: '*',
        element: <Navigate to={PATH.ERROR}/>
      },
      {
        path: PATH.ERROR,
        element: <Error404/>
      }
    ]
  }
])