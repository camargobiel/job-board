
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ROUTES } from '@/shared/constants'

const router = createBrowserRouter(ROUTES)

export const Routes = () => {
  return <RouterProvider router={router} />
}