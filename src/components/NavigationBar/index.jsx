/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import { AiOutlineHome, AiOutlineUser, AiOutlineContacts } from "react-icons/ai"
import { BsPersonWorkspace } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import { useStoreState, useStoreActions } from "easy-peasy"

export const NavigationBar = ({ children }) => {
  const [isMobileView, setIsMobileView] = useState(false)
  const todos = useStoreState((state) => state.todos)
  const addTodo = useStoreActions((actions) => actions.addTodo)
  const router = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth

      if (screenWidth <= 645) {
        setIsMobileView(true)
      } else {
        setIsMobileView(false)
      }
    }

    // Initial check
    handleResize()

    // Listen to the window resize event
    window.addEventListener("resize", handleResize)

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const scrollToSection = (sectionId, margintop) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = margintop
      const elementPosition = element.offsetTop - headerOffset
      window.scrollTo({ top: elementPosition, behavior: "smooth" })
    }
  }

  const handleProfile = () => {
    router("/ProfilePage"), scrollToSection("aboutme", 0)
  }

  return (
    <div className="flex flex-col">
      {isMobileView ? (
        <>
          <div className="btm-nav z-50">
            <button onClick={() => router("/")}>
              <AiOutlineHome size={25} />
            </button>
            <button onClick={() => handleProfile()}>
              <AiOutlineUser size={25} />
            </button>
            <button onClick={() => scrollToSection("projects", 100)}>
              <BsPersonWorkspace size={25} />
            </button>
            <button onClick={() => scrollToSection("contactme", 0)}>
              <AiOutlineContacts size={25} />
            </button>
          </div>
        </>
      ) : (
        <>
          <div
            className={`flex top-0 z-30 justify-between items-center w-screen h-16 bg-[#DDE6ED] shadow-md shadow-gray-800 fixed`}
          >
            {/* start logo */}
            <button
              className="font-bold text-2xl bg-[#222831] h-full flex items-center w-56 px-10 rounded-br-full"
              onClick={() => router("/")}
            >
              YansonFer
            </button>
            {/* end logo */}
            {/* start menu */}

            <div
              className={`flex flex-row pr-5 font-bold items-center text-[#222831]`}
            >
              <button
                className="font-medium hover:shadow-inner hover:border-b-4 duration-75 transition-all hover:border-[#222831] w-full h-full py-5 px-5 hover:shadow-gray-950"
                onClick={() => router("/")}
              >
                Home
              </button>
              <button
                className="font-medium hover:shadow-inner hover:border-b-4 duration-75 transition-all hover:border-[#222831] w-full h-full py-5 px-5 hover:shadow-gray-950"
                onClick={() => handleProfile()}
              >
                Profile
              </button>
              <button
                onClick={() => scrollToSection("projects", 100)}
                className="font-medium hover:shadow-inner hover:border-b-4 duration-75 transition-all hover:border-[#222831] w-full h-full py-5 px-5 hover:shadow-gray-950"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contactme", 0)}
                className="font-medium hover:shadow-inner hover:border-b-4 duration-75 transition-all hover:border-[#222831] w-full h-full py-5 px-5 hover:shadow-gray-950"
              >
                Contact
              </button>
            </div>
            {/* end menu */}
          </div>
          {children}
        </>
      )}
    </div>
  )
}
