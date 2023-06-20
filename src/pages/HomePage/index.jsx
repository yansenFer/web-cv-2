/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { AiOutlineArrowDown } from "react-icons/ai"
import { useEffect, useState } from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { useSpring, animated } from "@react-spring/web"
import { NavigationBar } from "../../components"
import { ProfileImage, HelloThere, CloudParticel } from "../../components"
import * as React from "react"
import arrowImage from "../../assets/arrow.png"
import yadika from "../../assets/ydk.png"

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
            offset={4.98}
            speed={0.56}
            style={{
              ...alignCenter,
              justifyContent: "center",
              backgroundImage: `url(${yadika})`,
              backgroundSize: "cover",
              zindex: 10,
            }}
          ></ParallaxLayer>
          <ParallaxLayer
            offset={5.35}
            className="justify-end"
            speed={0.3}
            style={{
              justifyContent: "center",
              backgroundColor: "#222831",
            }}
          ></ParallaxLayer>
          <ParallaxLayer
            offset={4}
            speed={0.4}
            style={{
              justifyContent: "center",
              backgroundColor: "#222831",
              zIndex: 20,
            }}
          ></ParallaxLayer>
          <CloudParticel />
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
            sticky={{ start: 2.4, end: 3.2 }}
            speed={1}
            style={{
              ...alignCenter,
              zindex: 20,
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
            sticky={{ start: 2.8, end: 3.2 }}
            speed={0.5}
            style={{
              ...alignCenter,
              paddingRight: 100,
              zIndex: 10,
            }}
          >
            <div className="flex mr-40 rounded-full justify-center items-center">
              <ProfileImage />
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={4}
            className="justify-end"
            sticky={{ start: 4, end: 4.5 }}
            speed={0.7}
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
              <animated.div className="text-[#EEEEEE] text-5xl font-black">
                Education
              </animated.div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={4.6}
            sticky={{ start: 4.6, end: 7 }}
            speed={0.1}
            style={{
              ...alignCenter,
              justifyContent: "center",
              paddingTop: "30%",
              zIndex: 10,
            }}
          >
            <div
              className={`flex-col items-center justify-start h-screen flex w-full`}
            >
              <animated.div className="text-[#EEEEEE] text-8xl font-black">
                SMK Yadika 4
              </animated.div>
            </div>
          </ParallaxLayer>
        </Parallax>
      </NavigationBar>
    </div>
  )
}
