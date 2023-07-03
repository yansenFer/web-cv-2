/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import { AiOutlineHome, AiOutlineUser, AiOutlineContacts } from "react-icons/ai"
import { BsPersonWorkspace } from "react-icons/bs"
import { useNavigate } from "react-router-dom"

export const NavigationBarHome = ({ children }) => {
  const [isMobileView, setIsMobileView] = useState(false)
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

  return (
    <div className="flex flex-col">
      {isMobileView ? (
        <>
          <div className="btm-nav z-50">
            <button>
              <AiOutlineHome onClick={() => router("/")} size={25} />
            </button>
            <button>
              <AiOutlineUser size={25} onClick={() => router("/ProfilePage")} />
            </button>
            <button>
              <BsPersonWorkspace size={25} />
            </button>
            <button>
              <AiOutlineContacts size={25} />
            </button>
          </div>
        </>
      ) : (
        <>
          <div
            className={`flex top-0 z-30 justify-between items-center w-screen h-16 bg-[#222831] sticky rounded-br-none shadow-md`}
          >
            {/* start logo */}
            <div className="font-bold text-2xl bg-[#222831] h-full flex items-center w-56 px-10 rounded-br-full">
              YansonFer
            </div>
            {/* end logo */}
            {/* start menu */}

            <div
              className={`flex flex-row pr-5 font-bold items-center text[#EEEEEE]`}
            >
              <button
                className="font-medium hover:shadow-inner duration-300 w-full h-full py-5 px-5 hover:shadow-gray-950"
                onClick={() => router("/")}
              >
                Home
              </button>
              <button
                className="font-medium hover:shadow-inner duration-300 w-full h-full py-5 px-5 hover:shadow-gray-950"
                onClick={() => router("/ProfilePage")}
              >
                Profile
              </button>
              <button className="font-medium hover:shadow-inner duration-300 w-full h-full py-5 px-5 hover:shadow-gray-950">
                Projects
              </button>
              <button className="font-medium hover:shadow-inner duration-300 w-full h-full py-5 px-5 hover:shadow-gray-950">
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
