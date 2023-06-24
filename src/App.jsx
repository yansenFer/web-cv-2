import "./App.css"
import { RouterProvider } from "react-router-dom"
import { router } from "./route/root"

function App() {
  return (
    <div className="flex flex-col w-full h-full">
      {/* section 1 */}

      <RouterProvider router={router} />
      {/* end section 1 */}
    </div>
  )
}

export default App
