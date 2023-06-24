/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Styles from "./Card.module.css"
import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import { useNavigate } from "react-router-dom"

function Card({ imagen, title, subtitle, link, buttonText }) {
  const [show, setShown] = useState(false)
  const route = useNavigate()
  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  })

  const handleLink = (value) => {
    if (value.includes("http")) {
      window.open(`${value}`)
    } else {
      route("/ProfilePage")
    }
  }

  return (
    <animated.div
      className="flex z-10 flex-col items-center justify-center bg-[#EEEEEE] w-64 h-fit p-8 rounded-lg"
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img
        src={imagen}
        alt="imageapaaja"
        className="w-64 rounded-xl bg-cover"
      />
      <div className="text-[#222831] font-medium">
        <span className="font-bold text-xl">{title}</span>
        <p>{subtitle}</p>
      </div>
      <button
        onClick={() => handleLink(link)}
        className="p-2 bg-[#222831] mt-5 rounded-full"
      >
        {buttonText}
      </button>
    </animated.div>
  )
}

export default Card
