/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"

export const NavigationBar = ({ children }) => {
  const [isScrollingDown, setIsScrollingDown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset

      if (scrollTop > 200) {
        setIsScrollingDown(true)
      } else {
        setIsScrollingDown(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="flex flex-col">
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
          className={`flex flex-row gap-10 pr-20 items-center ${
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
    </div>
  )
}
