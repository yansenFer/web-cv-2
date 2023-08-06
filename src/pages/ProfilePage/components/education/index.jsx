/* eslint-disable react/no-unescaped-entities */
import yadikalogo from "../../../../assets/ydklogo.png"
import ubmlogo from "../../../../assets/ubmlogo.png"
import { MdCastForEducation } from "react-icons/md"

export function Education() {
  return (
    <div className="hero min-h-screen">
      <div className="flex w-full flex-col gap-4 xl:px-20 lg:px-15 md:px-5 sm:px-5 px-0 items-center justify-center mt-16">
        <div className="flex flex-row items-center gap-4">
          <MdCastForEducation color="black" size={35} />
          <text className="text-5xl font-bold text-black">Education</text>
        </div>
        {/* smk yadika 4 */}
        <div className="bg-[#222831] border-4 border-slate-400 rounded-lg xl:w-[80%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] mt-5 xl:pr-10 lg:pr-10 md:px-5 sm:px-5 px-5 py-8 flex flex-row">
          <div className="flex flex-row xl:w-[50%] lg:w-[50%] md:w-0 sm:w-0 w-0 xl:visible lg:visible md:invisible sm:invisible invisible justify-center">
            <img src={yadikalogo} className="w-20 h-20" />
          </div>
          <div className="flex flex-col">
            <text className="text-neutral-content font-bold text-2xl text-left">
              SMK Yadika 4
            </text>
            <text className="text-neutral-content text-justify ">
              In senior high school, I chose a vocational high school and
              specialized in the field of Computer Technology and Networking. I
              opted for higher secondary education so that I could work while
              pursuing my college degree. I chose the Computer and Networking
              Engineering program because I have a passion for all things
              related to computers. I started attending vocational high school
              in 2015 and graduated in 2018.
            </text>
          </div>
        </div>
        {/* end smk yadika 4 */}

        {/* Universitas bunda mulia */}
        <div className="bg-[#222831] border-4 border-slate-400 rounded-lg xl:w-[80%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] mt-5 xl:pr-10 lg:pr-10 md:px-5 sm:px-5 px-5 py-8 flex flex-row">
          <div className="flex flex-row xl:w-[55%] lg:w-[55%] md:w-0 sm:w-0 w-0 xl:visible lg:visible md:invisible sm:invisible invisible justify-center">
            <img src={ubmlogo} className="w-24 h-20" />
          </div>
          <div className="flex flex-col">
            <text className="text-neutral-content font-bold text-2xl text-left">
              Universitas Bunda Mulia
            </text>
            <text className="text-neutral-content text-justify ">
              I started my college in 2018, studying Informatics at Bunda Mulia
              University. When I initially enrolled, I chose evening classes
              because I was working full-time during the day. I opted for the
              Informatics major because I have a passion for computer science.
              Although I didn't have much time to delve deeply into it during my
              studies due to a packed schedule, after graduating in 2022, I
              began to immerse myself in it and started working on independent
              developer projects.
            </text>
          </div>
        </div>
        {/* end universitas bunda mulia */}
      </div>
    </div>
  )
}
