import "./App.css"
import { NavigationBar } from "./components"
import { RouterProvider } from "react-router-dom"
import { router } from "./route/root"
function App() {
  return (
    <div className="container w-full h-full max-w-screen max-h-screen ">
      <NavigationBar />
      {/* section 1 */}
      <RouterProvider router={router} />
      {/* end section 1 */}
    </div>
  )
}

export default App
