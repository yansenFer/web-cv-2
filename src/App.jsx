import "./App.css"
import { RouterProvider } from "react-router-dom"
import { router } from "./route/root"
import { StoreProvider } from "easy-peasy"
import { store } from "./store"

function App() {
  return (
    <StoreProvider store={store}>
      <div className="flex flex-col w-full h-full">
        {/* section 1 */}

        <RouterProvider router={router} />
        {/* end section 1 */}
      </div>
    </StoreProvider>
  )
}

export default App
