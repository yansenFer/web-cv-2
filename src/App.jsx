import "./App.css"
import { RouterProvider } from "react-router-dom"
import { router } from "./route/root"
import { StoreProvider } from "easy-peasy"
import { store } from "./store"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <StoreProvider store={store}>
      {/* section 1 */}
      <ToastContainer />

      <RouterProvider router={router} />
      {/* end section 1 */}
    </StoreProvider>
  )
}

export default App
