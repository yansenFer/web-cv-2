/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { NavigationBar } from "../../components"
import {
  AboutMe,
  ContactsPage,
  Projects,
  Skill,
  TeamworkSkill,
} from "./components"
import { useEffect, useState } from "react"
import { Education } from "./components"
import { Experience } from "./components"

// import { yadikaLogo } from "../../assets/ydklogo.png"

export function ProfilePage() {
  const [isEducation, SetIsEducation] = useState(false)
  const [isExperience, SetIsExperience] = useState(false)
  const [isCodeSkill, setIsCodeSkill] = useState(false)
  const [isTeamWork, setIsTeamWork] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset
      if (scrollPosition >= 250 && scrollPosition < 499)
        return SetIsEducation(true)
      if (scrollPosition > 500 && scrollPosition < 1399)
        return SetIsExperience(true)
      if (scrollPosition > 1400 && scrollPosition <= 1899)
        return setIsCodeSkill(true)
      if (scrollPosition > 1800) return setIsTeamWork(true)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <>
      <NavigationBar />
      <div className="bg-[#DDE6ED] absolute flex min-w-screen justify-center items-center xl:w-full md:w-full lg:w-full sm:w-full w-auto">
        <div className="flex flex-col items-start max-w-[1920px] h-full">
          <AboutMe />
          <Education />
          <Experience />
          <Skill />
          <TeamworkSkill />
          <Projects />
          <ContactsPage />
        </div>
      </div>
    </>
  )
}
