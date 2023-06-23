/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { AiOutlineArrowDown } from "react-icons/ai"
import { useEffect, useState } from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { useSpring, animated } from "@react-spring/web"
import { CardView, NavigationBar } from "../../components"
import { ProfileImage, HelloThere, CloudParticel } from "../../components"
import * as React from "react"
import yadika from "../../assets/ydk.png"
import toga from "../../assets/toga.png"
import ubm from "../../assets/ubm.png"

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
      <NavigationBar />
      <Parallax
        pages={12}
        style={{
          paddingTop: 10,
          zIndex: 20,
        }}
      >
        <ParallaxLayer
          offset={4.98}
          speed={0.56}
          style={{
            ...alignCenter,
            justifyContent: "center",
            backgroundImage: `url(${yadika})`,
            backgroundSize: "cover",
            zindex: 10,
            opacity: 0.6,
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={8.4}
          sticky={{ start: 8.4, end: 8.8 }}
          speed={0.4}
          style={{
            ...alignCenter,
            justifyContent: "center",
          }}
        >
          <img
            src={toga}
            alt="gambarToga"
            className="xl:w-[50%] lg:w-[50%] md:w-[80%] mt-20 xl:visible lg:visible md:visible sm:invisible invisible"
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={7}
          speed={0.6}
          style={{
            ...alignCenter,
            justifyContent: "center",
            backgroundImage: `url(${ubm})`,
            backgroundSize: "cover",
            zindex: 10,
            opacity: 0.6,
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
        <ParallaxLayer
          offset={6.65}
          speed={0.4}
          style={{
            justifyContent: "center",
            backgroundColor: "#222831",
            zIndex: 20,
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={7.9}
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
              className={`text-[#FFF4F4] font-bold animate__animated animate__fadeIn animate__slow xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-lg`}
            >
              Hello, welcome!
            </span>
            <span className="text-[#FFF4F4] font-bold animate__animated animate__fadeIn animate__slow animate__delay-2s xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl text-lg">
              If you want to know more about me, you can scroll down
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
            <span
              style={rgbText}
              className="xl:text-8xl lg:text-8xl md:text-7xl sm:text-6xl text-4xl font-black"
            >
              Hello There!!
            </span>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.4}
          className="xl:px-36 lg:px-36 md:px-10 sm:px-5 px-3"
          sticky={{ start: 2.4, end: 3.4 }}
          speed={1}
          style={{
            ...alignCenter,
            zindex: 20,
            justifyContent: "start",
          }}
        >
          <div className="flex gap-5 flex-col justify-center xl:w-[70%] md:w-[100%] lg:w-[50%] sm:w-[100%] w-[100%] xl:items-start lg:items-start md:items-center sm:items-center items-center">
            <span className="text-[#EEEEEE] xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-2xl font-black">
              My name is Yanson.
            </span>
            <span className="text-White font-bold xl:text-xl lg:text-xl md:text-xl sm:text-xl text-sm xl:text-justify lg:text-justify md:text-justify sm:text-justify text-justify">
              I am a frontend developer and currently learning backend Node.js
              as well. I'm still a junior and have been working in the IT
              industry from November 2022. Some of the programming languages
              that I have mastered include TypeScript, Next.Js, React.JS, and
              React Native. As for CSS, I am proficient in using Tailwind CSS to
              create website user interfaces and Native Base for React Native
              (Mobile) projects.
            </span>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.8}
          className="justify-end xl:visible lg:visible md:invisible sm:invisible invisible"
          sticky={{ start: 2.8, end: 3.4 }}
          speed={0.3}
          style={{
            ...alignCenter,
            paddingRight: 150,
            zIndex: 10,
          }}
        >
          <div className="flex  rounded-full justify-center items-center">
            <ProfileImage />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={4.6}
          sticky={{ start: 4.6, end: 6 }}
          speed={0.1}
          style={{
            ...alignCenter,
            opacity: 1,
            zIndex: 10,
          }}
        >
          <div
            className={`flex-col items-center xl:pb-[20%] lg:pb-[30%] md:pb-[40%] pb-[70%] justify-start flex w-full`}
          >
            <span className="text-[#EEEEEE] xl:text-8xl lg:text-7xl md:text-6xl sm:text-6xl text-4xl font-black">
              SMK Yadika 4
            </span>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={5.3}
          className="xl:px-36 lg:px-36 md:px-10 sm:px-5 px-3"
          sticky={{ start: 5.3, end: 6 }}
          speed={0.1}
          style={{
            ...alignCenter,
            justifyContent: "center",
            opacity: 1,
            zIndex: 10,
          }}
        >
          <div className={`flex-col items-center justify-center flex w-full`}>
            <span className="text-White font-bold xl:text-xl lg:text-xl md:text-xl sm:text-xl text-sm xl:text-center lg:text-center md:text-justify sm:text-justify text-justify">
              In senior high school, I chose a vocational high school and
              specialized in the field of "Computer Technology and Networking."
              I opted for higher secondary education so that I could work while
              pursuing my college degree. I chose the "Computer and Networking
              Engineering" program because I have a passion for all things
              related to computers. I started attending vocational high school
              in 2015 and graduated in 2018.
            </span>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={5.5}
          sticky={{ start: 5.5, end: 6 }}
          speed={1}
          style={{
            ...alignCenter,
            justifyContent: "center",
          }}
        >
          <img
            src={toga}
            alt="imageToga"
            className="w-72 xl:pt-[25%] lg:pt-[45%] md:pt-[50%] pt-[100%] "
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={6.8}
          sticky={{ start: 7, end: 8.8 }}
          speed={0.8}
          style={{
            ...alignCenter,
            opacity: 1,
            zIndex: 10,
          }}
        >
          <div
            className={`flex-col items-center xl:pb-[20%] lg:pb-[30%] md:pb-[40%] pb-[75%] justify-start flex w-full`}
          >
            <animated.div className="text-[#EEEEEE] xl:text-8xl lg:text-7xl md:text-6xl sm:text-6xl text-4xl font-black">
              Universitas Bunda Mulia
            </animated.div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={7.7}
          className="xl:px-36 lg:px-36 md:px-10 sm:px-5 px-3"
          sticky={{ start: 7.7, end: 8.8 }}
          speed={0.5}
          style={{
            ...alignCenter,
            justifyContent: "center",
            opacity: 1,
            zIndex: 10,
          }}
        >
          <div className={`flex-col items-center justify-center flex w-full`}>
            <span className="text-White font-bold xl:text-xl lg:text-xl md:text-xl sm:text-xl text-sm xl:text-center lg:text-center md:text-justify sm:text-justify text-justify">
              I started my college in 2018, studying Informatics at Bunda Mulia
              University. When I initially enrolled, I chose evening classes
              because I was working full-time during the day. I opted for the
              Informatics major because I have a passion for computer science.
              Although I didn't have much time to delve deeply into it during my
              studies due to a packed schedule, after graduating in 2022, I
              began to immerse myself in it and started working on independent
              developer projects.
            </span>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={10}
          className="items-start pt-[15%] justify-center"
          sticky={{ start: 10, end: 11 }}
          speed={0.8}
          style={{
            justifyContent: "center",
          }}
        >
          <span
            className="text-[#EEEEEE] xl:text-5xl lg:text-5xl md:text-5xl sm:text-3xl text-2xl font-black"
            style={rgbText}
          >
            Here If you want to see more details
          </span>
        </ParallaxLayer>
        <ParallaxLayer
          offset={10.5}
          className="items-start xl:pt-[20%] lg:pt-[25%] md:pt-[30%] sm:pt-[40%] pt-[30%] justify-center"
          sticky={{ start: 10.5, end: 11 }}
          speed={0.8}
        >
          <CardView />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
