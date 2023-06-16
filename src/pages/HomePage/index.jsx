/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { AiOutlineArrowDown } from "react-icons/ai"
import { useEffect } from "react"
import { ScrollMagic } from "scrollmagic"

export function HomePage() {
  return (
    <div className="flex flex-col w-screen">
      <div className="flex-col items-center justify-center h-96 bg-[#606C5D] flex w-full">
        <span className="text-White font-bold text-2xl">
          Hello, Welcome to my Web CV. My Name Is Yanson, and I'm Frontend
          Developer, and I'M still junior.
        </span>
        <span className="text-White font-bold text-2xl mt-5">
          If you want to know me more.. Lets Scroll Down
        </span>
        <AiOutlineArrowDown className="animate-bounce mt-10" size={40} />
      </div>
    </div>
  )
}
