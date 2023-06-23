/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import { AiOutlineHome, AiOutlineUser, AiOutlineContacts } from "react-icons/ai"
import { BsPersonWorkspace } from "react-icons/bs"

export const NavigationBar = ({ children }) => {
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const [isMobileView, setIsMobileView] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth

      if (screenWidth <= 655) {
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
          <div
            className={`grid bottom-0 z-30 justify-center items-center w-full h-16 duration-500bg-[#222831] absolute shadow-md`}
          >
            {/* start menu */}
            <div
              className={`grid grid-cols-4 gap-16 min-w-fit items-center ${
                isScrollingDown ? "text-[#606C5D]" : "text[#FFF4F4]"
              }`}
            >
              <AiOutlineHome size={25} />
              <AiOutlineUser size={25} />
              <BsPersonWorkspace size={25} />
              <AiOutlineContacts size={25} />
            </div>
            {/* end menu */}
          </div>
          {children}
        </>
      ) : (
        <>
          <div
            className={`flex top-0 z-30 justify-between items-center w-screen h-16 duration-500 ${
              isScrollingDown
                ? "bg-[#FFF4F4] shadow-md shadow-gray-800 fixed rounded-br-full transition-all"
                : "bg-[#222831] sticky rounded-br-none transition-all shadow-md"
            }`}
          >
            {/* start logo */}
            <div className="font-bold text-2xl bg-[#222831] h-full flex items-center w-56 px-10 rounded-br-full">
              YansonFer
            </div>
            {/* end logo */}
            {/* start menu */}

            <div
              className={`flex lex-row gap-10 pr-20 items-center ${
                isScrollingDown ? "text-[#606C5D]" : "text[#FFF4F4]"
              }`}
            >
              <button className="font-medium">Home</button>
              <button className="font-medium">Profile</button>
              <button className="font-medium">Projects</button>
              <button className="font-medium">Contact</button>
            </div>
            {/* end menu */}
          </div>
          {children}
        </>
      )}
    </div>
  )
}
