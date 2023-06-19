/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { AiOutlineArrowDown } from "react-icons/ai"
import { useEffect, useState } from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { NavigationBar } from "../../components"
import { ProfileImage, HelloThere, CloudParticel } from "../../components"
import * as React from "react"
import arrowImage from "../../assets/arrow.png"

export function HomePage() {
  const [arrow, setArrow] = useState(false)
  const alignCenter = { display: "flex", alignItems: "center" }

  setTimeout(
    () => {
      setArrow(true)
    },
    !arrow ? 2000 : 0
  )

  const rgbText = {
    background:
      "linear-gradient(90deg, RGB(255, 20, 147), RGB(255, 0, 51), RGB(153, 51, 255), RGB(0, 255, 255), RGB(0, 102, 255))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }

  return (
    <div className="flex flex-col w-full">
      <NavigationBar>
        <Parallax pages={10} style={{ paddingTop: 10, zIndex: 20 }}>
          <ParallaxLayer
            offset={0}
            speed={0.1}
            style={{
              ...alignCenter,
              backgroundColor: "#222831",
              justifyContent: "center",
            }}
          >
            <div className="flex flex-col w-screen items-center">
              <span
                className={`text-[#FFF4F4] font-bold animate__animated animate__fadeIn animate__slow text-2xl`}
              >
                Hello, welcome!
              </span>
              <span className="text-[#FFF4F4] font-bold animate__animated animate__fadeIn animate__slow animate__delay-2s text-2xl">
                If you want to know more about me, scroll down and follow my
                journey.
              </span>
              <AiOutlineArrowDown
                className={`duration-1000 animate__fadeIn animate__animated  animate__delay-2s animate__bounce mt-14`}
                color="#FFF4F4"
                size={40}
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            // className="bg-[#00ADB5]"
            offset={1}
            sticky={{ start: 1, end: 5 }}
            speed={0.5}
            style={{
              ...alignCenter,
              justifyContent: "center",
            }}
          />
          <ParallaxLayer
            offset={1.5}
            sticky={{ start: 1.5, end: 1.9 }}
            speed={1}
            style={{
              ...alignCenter,
              justifyContent: "center",
            }}
          >
            <div
              className={`flex-col items-center justify-center h-screen flex w-full`}
            >
              <span style={rgbText} className="text-8xl font-black">
                Hello There!!
              </span>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={2.4}
            sticky={{ start: 2.4, end: 5 }}
            speed={0.5}
            style={{
              ...alignCenter,
              justifyContent: "start",
            }}
          >
            <div className="flex ml-32 gap-5 flex-col justify-center w-[50%] items-start">
              <span className="text-White font-bold text-4xl">
                My name is Yanson.
              </span>
              <span className="text-White font-bold text-xl text-left">
                I am a frontend developer and currently learning backend Node.js
                as well. I'm still a junior and have been working in the IT
                industry from November 2022. Some of the programming languages
                that I have mastered include TypeScript, Next.Js, React.JS, and
                React Native. As for CSS, I am proficient in using Tailwind CSS
                to create website user interfaces and Native Base for React
                Native (Mobile) projects.
              </span>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={2.8}
            className="justify-end"
            sticky={{ start: 3, end: 5 }}
            speed={0.5}
            style={{
              ...alignCenter,
              paddingRight: 100,
              zIndex: 10,
            }}
          >
            <div className="flex mr-24 rounded-full justify-center items-center">
              <ProfileImage />
            </div>
          </ParallaxLayer>
          <CloudParticel />
          <ParallaxLayer
            offset={4}
            className="justify-end"
            sticky={{ start: 4, end: 5 }}
            speed={0.5}
            style={{
              ...alignCenter,
              width: "80%",
              paddingRight: 100,
            }}
          >
            <div className="fixed top-0 xl:mr-20 lg:mr-32 md:mr-32 ">
              <img
                src={arrowImage}
                alt="gambarArrow"
                width={300}
                height={300}
                className="-rotate-45"
              />
            </div>
            <span
              style={rgbText}
              className="text-4xl flex flex-col fixed xl:mr-36 lg:mr-48 md:mr-32 top-[25%] font-black"
            >
              <span>IT'S ME</span>
              <span>Click Photo</span>
            </span>
          </ParallaxLayer>
          <ParallaxLayer
            offset={6}
            className="justify-end"
            sticky={{ start: 6, end: 6.4 }}
            speed={0.1}
            style={{
              ...alignCenter,
              paddingTop: "10%",
              paddingLeft: "1%",
              zIndex: 10,
            }}
          >
            <div
              className={`flex-col items-start justify-start h-screen flex w-full`}
            >
              <span style={rgbText} className="text-5xl font-black">
                Education
              </span>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={6.2}
            className="justify-end"
            sticky={{ start: 6.2, end: 6.7 }}
            speed={0.5}
            style={{
              ...alignCenter,
              justifyContent: "center",
              backgroundImage: `url()`,
              backgroundSize: "cover",
            }}
          ></ParallaxLayer>
        </Parallax>
      </NavigationBar>
    </div>
  )
}
