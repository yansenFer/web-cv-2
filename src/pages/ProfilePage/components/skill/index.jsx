import { GiSkills } from "react-icons/gi"
import reactjs from "../../../../assets/reactjs.png"
import nextjs from "../../../../assets/nextjs.png"
import js from "../../../../assets/javascript.png"
import ts from "../../../../assets/ts.png"
import tailwind from "../../../../assets/tailwind.svg"
import mysql from "../../../../assets/mysql.png"
import expressjs from "../../../../assets/expressjs.svg"

export function Skill() {
  return (
    <div className="hero min-h-screen">
      <div className="w-full flex flex-col gap-3 justify-center items-center">
        <div className="flex flex-row items-cente justify-center gap-4">
          <GiSkills color="black" size={35} />
          <text className="text-5xl font-bold text-black">SKills</text>
        </div>
        <div className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-3 xl:gap-16 lg:gap-16 md:gap-10 sm:gap-5 gap-2 justify-center items-center mt-10">
          <div className="bg-[#222831] justify-center gap-1 w-24 h-24 hover:bg-gray-900 hover:transition-all hover:duration-300 flex flex-col items-center rounded-lg">
            <img src={reactjs} className="w-10" />
            <text className="text-white font-semibold text-sm">React.js</text>
          </div>
          <div className="bg-[#222831] justify-center gap-1 w-24 h-24 hover:bg-gray-900 hover:transition-all hover:duration-300 flex flex-col items-center rounded-lg">
            <img src={nextjs} className="w-10" />
            <text className="text-white font-semibold text-sm">Next.Js</text>
          </div>
          <div className="bg-[#222831] justify-center gap-1 hover:bg-gray-900 w-24 h-24 hover:transition-all hover:duration-300 flex flex-col items-center rounded-lg">
            <img src={reactjs} className="w-10" />
            <text className="text-white font-semibold text-sm">
              React Native
            </text>
          </div>
          <div className="bg-[#222831] justify-center gap-1 hover:bg-gray-900 w-24 h-24 hover:transition-all hover:duration-300 flex flex-col items-center rounded-lg">
            <img src={js} className="w-10" />
            <text className="text-white font-semibold text-sm">Js</text>
          </div>
          <div className="bg-[#222831] justify-center gap-1 hover:bg-gray-900 w-24 h-24  hover:transition-all hover:duration-300 flex flex-col items-center rounded-lg">
            <img src={ts} className="w-10" />
            <text className="text-white font-semibold text-sm">Typescript</text>
          </div>
          <div className="bg-[#222831] justify-center gap-1 hover:bg-gray-900 w-24 h-24  hover:transition-all hover:duration-300 flex flex-col items-center rounded-lg">
            <img src={tailwind} className="w-10" />
            <text className="text-white font-semibold text-sm">
              Tailwind Css
            </text>
          </div>
          <div className="bg-[#222831] justify-center gap-1 hover:bg-gray-900 w-24 h-24  hover:transition-all hover:duration-300 flex flex-col items-center rounded-lg">
            <img src={mysql} className="w-10" />
            <text className="text-white font-semibold text-sm">MySql</text>
          </div>
          <div className="bg-[#222831] justify-center gap-1 hover:bg-gray-900 w-24 h-24  hover:transition-all hover:duration-300 flex flex-col items-center rounded-lg">
            <img src={expressjs} className="w-10" color="white" />
            <div className="flex flex-col">
              <text className="text-white font-semibold text-sm">
                Express.Js{" "}
              </text>
              <text className="text-white font-semibold text-sm">
                (Learning)
              </text>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
