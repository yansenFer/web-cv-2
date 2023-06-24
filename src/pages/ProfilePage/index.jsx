import { NavigationBar } from "../../components"
import { AboutMe, Education, Experience } from "./components"

export function ProfilePage() {
  return (
    <div className="bg-[#DDE6ED] absolute top-0 right-0 left-0 flex w-full">
      <NavigationBar />
      <div className="flex flex-col items-start w-screen h-full">
        <AboutMe />
        <Education />
        <Experience />
        {/* <Experience /> */}
      </div>
    </div>
  )
}
