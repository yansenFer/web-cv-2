/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"

export const NavigationBar = () => {
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
    <div
      className={`flex top-0 justify-between items-center w-screen h-16 duration-500 ${
        isScrollingDown
          ? "bg-[#FFF4F4] shadow-md shadow-gray-800 fixed rounded-br-full transition-all"
          : "bg-[#606C5D] shadow-xl shadow-[#606C5D] sticky rounded-br-none"
      }`}
    >
      {/* start logo */}
      <div className="font-bold text-2xl bg-[#606C5D] h-full flex items-center w-56 px-10 rounded-br-full">
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
  )
}
