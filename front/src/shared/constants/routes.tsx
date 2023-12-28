import { Login } from "@/features/Login"
import { RouteObject } from "react-router-dom"

export const ROUTES: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      return {}
    }
  }
]
