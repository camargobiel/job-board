import { UserLogin } from "@/features/user-login"
import { RouteObject } from "react-router-dom"

export const ROUTES: RouteObject[] = [
  {
    path: "/login",
    element: <UserLogin />,
    loader: () => {
      return {}
    }
  }
]