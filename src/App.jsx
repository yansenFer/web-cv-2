import "./App.css"
import { RouterProvider } from "react-router-dom"
import { router } from "./route/root"
import { StoreProvider } from "easy-peasy"
import { store } from "./store"

function App() {
  return (
    <StoreProvider store={store}>
      {/* section 1 */}

      <RouterProvider router={router} />
      {/* end section 1 */}
    </StoreProvider>
  )
}

export default App
