import {createBrowserRouter, Navigate} from "react-router-dom";
import {Error404} from "../components/pages/Error404";
import {App} from "../App";
import {Adidas} from "../components/pages/Adidas";
import {Abibas} from "../components/pages/Abibas";
import {Puma} from "../components/pages/Puma";
import {Model} from "../components/pages/Model";
import {Prices} from "../components/pages/Prices";
import {ProtectedRoute} from "./ProtectedRoute";
import {ProtectedPage} from "../components/pages/ProtectedPage";

export const PATH= {
  ADIDAS: "/adidas",
  PUMA: "/puma",
  ABIBAS: "/abibas",
  PRICES: "/prices",
  MODEL: "/:brand/model/:id",
  PROTECTED: "/protected",
  ERROR: "/error404"
} as const

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error404/>,
    children: [
      {
        index: true,
        element: <Navigate to={PATH.ADIDAS}/>
      },
      {
        path: PATH.MODEL,
        element: <Model/>
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
        path: PATH.PRICES,
        element: <Prices/>
      },
      {
        path: PATH.PROTECTED,
        element: (
          <ProtectedRoute>
            <ProtectedPage/>
          </ProtectedRoute>
        )
      },
      {
        path: PATH.ERROR,
        element: <Error404/>
      },
      {
        path: '*',
        element: <Error404/>
      }
    ]
  }
])