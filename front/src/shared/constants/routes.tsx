import { Enter } from "@/features/Enter"
import { RouteObject } from "react-router-dom"

export const ROUTES: RouteObject[] = [
  {
    path: "/entrar",
    element: <Enter />,
    loader: () => {
      return {}
    }
  },
]
