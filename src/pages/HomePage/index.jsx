/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { AiOutlineArrowDown } from "react-icons/ai"
import { useEffect, useState } from "react"
import ScrollTrigger from "react-scroll-trigger"

export function HomePage() {
  const [scrollTrigger, setScrollTriger] = useState("")
  const [arrow, setArrow] = useState(false)
  const [isTextBorn, setIsTextBorn] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset

      if (scrollTop === 0 && scrollTop < 300) {
        setScrollTriger("inPembukaan")
      }
      if (scrollTop >= 600) {
        setScrollTriger("inKelahiran")
        if (scrollTop > 600 && scrollTop > 800) {
          setIsTextBorn(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  setTimeout(
    () => {
      setArrow(true)
    },
    !arrow ? 2000 : 0
  )

  return (
    <div className="flex flex-col w-screen">
      <div className="flex-col items-center justify-center h-screen bg-[#606C5D] flex w-full">
        <span
          className={`text-[#FFF4F4] font-bold animate__animated animate__fadeIn animate__slow text-2xl`}
        >
          Hello, welcome! My name is Yanson.
        </span>
        <span
          className={`text-[#FFF4F4] mt-10 font-bold text-xl animate__animated animate__fadeIn animate__slow animate__delay-2s
          `}
        >
          I am a frontend developer and currently learning backend Node.js as
          well.
        </span>
        <span
          className={`text-[#FFF4F4] mt-10 font-bold text-xl 
         animate__animated animate__fadeIn animate__slow animate__delay-2s
          `}
        >
          I'm still a junior and have been working in the IT industry from
          November 2022
        </span>
        <span
          className={`text-[#FFF4F4] mt-10 font-bold text-xl
          animate__animated animate__fadeIn animate__slow animate__delay-2s
          `}
        >
          If you want to know more about me, scroll down to follow my journey.
        </span>
        <AiOutlineArrowDown
          className={`${
            arrow ? "opacity-100" : " opacity-0"
          } duration-1000 animate-bounce mt-14`}
          color="#FFF4F4"
          size={40}
        />
      </div>
      <div
        className={`flex-col items-center justify-center h-screen flex w-full transition-all duration-1000 ${
          scrollTrigger === "inKelahiran" ? "bg-[#F1C376]" : "bg-[#606C5D]"
        }`}
      >
        {isTextBorn ? (
          <>
            <span className="text-White font-bold text-2xl scrolltri animate__animated animate__zoomInDown animate__slow">
              I was born in Jakarta
            </span>
            <span className="text-White font-bold text-2xl mt-5 animate__animated animate__lightSpeedInLeft animate__slow animate__delay-2s">
              precisely on January 1, 2000.
            </span>
          </>
        ) : null}
      </div>
    </div>
  )
}
