import { createBrowserRouter } from "react-router-dom"
import { HomePage, ProfilePage } from "../pages"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/ProfilePage",
    element: <ProfilePage />,
  },
])
