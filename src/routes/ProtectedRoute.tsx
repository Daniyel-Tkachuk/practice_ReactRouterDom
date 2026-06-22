import {ReactNode} from "react";
import {Navigate} from "react-router-dom";
import {PATH} from "./router";

type Props = {
  children: ReactNode
}

export const ProtectedRoute = ({children}: Props) => {
  const isLogged = false

  if (!isLogged) {
    return <Navigate to={PATH.ERROR}/>
  }

  return (
    <div>
      {children}
    </div>
  );
};
