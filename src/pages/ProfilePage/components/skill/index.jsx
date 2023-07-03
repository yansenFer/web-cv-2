/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export function Skill({ isAnimated }) {
  return (
    <>
      <span
        className={`text-5xl xl:mx-10 lg:mx-10 md:mx-10 sm:mx-0 mx-0 font-bold text-[#27374D] items-start mt-10 ${
          isAnimated
            ? "animate__animated animate__bounceInLeft animate__slow"
            : "invisible"
        }`}
      >
        Code Skill
      </span>
      <ul
        className={`text-[#27374D] mt-10 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 mx-5 font-bold ${
          isAnimated
            ? "animate__animated animate__fadeInUp animate__fast animate__delay-2s"
            : "invisible"
        }`}
      >
        <li className="flex flex-row gap-3 items-center justify-start">
          <div className="bg-[#27374D] rounded-full w-3 h-3" />
          <p>TypeScript</p>
        </li>
        <li className="flex flex-row gap-3 items-center justify-start">
          <div className="bg-[#27374D] rounded-full w-3 h-3" />
          <p>Next.JS</p>
        </li>
        <li className="flex flex-row gap-3 items-center justify-start">
          <div className="bg-[#27374D] rounded-full w-3 h-3" />
          <p>Tailwind CSS</p>
        </li>
        <li className="flex flex-row gap-3 items-center justify-start">
          <div className="bg-[#27374D] rounded-full w-3 h-3" />
          <p>React.JS</p>
        </li>
        <li className="flex flex-row gap-3 items-center justify-start">
          <div className="bg-[#27374D] rounded-full w-3 h-3" />
          <p>React Native</p>
        </li>
        <li className="flex flex-row gap-3 items-center justify-start">
          <div className="bg-[#27374D] rounded-full w-3 h-3" />
          <p>Native Base CSS</p>
        </li>
      </ul>
    </>
  )
}
