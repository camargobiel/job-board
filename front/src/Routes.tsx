
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ROUTES } from '@/shared/constants'
import { Spinner } from '@material-tailwind/react'

const router = createBrowserRouter(ROUTES)

export const Routes = () => {
  return <RouterProvider router={router} fallbackElement={<Spinner />} />
}