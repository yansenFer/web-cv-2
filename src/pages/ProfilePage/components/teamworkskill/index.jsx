/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export function TeamworkSkill({ isAnimated }) {
  return (
    <>
      <span
        className={`text-5xl xl:mx-10 lg:mx-10 md:mx-10 sm:mx-0 mx-0 font-bold text-[#27374D] items-start mt-10 ${
          isAnimated
            ? "animate__animated animate__bounceInLeft animate__slow"
            : "invisible"
        }`}
      >
        Team Work Skill
      </span>
      <dev
        className={`grid gap-2 mb-20  xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 mt-10 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 mx-5 ${
          isAnimated
            ? "animate__animated animate__fadeInUp animate__fast animate__delay-2s"
            : "invisible"
        }`}
      >
        <div className="bg-[#00ADB5] rounded-lg p-2 font-bold">
          Communication
        </div>
        <div className="bg-[#00ADB5] rounded-lg p-2 font-bold">Team Work</div>
        <div className="bg-[#00ADB5] rounded-lg p-2 font-bold">
          Time Management
        </div>
        <div className="bg-[#00ADB5] rounded-lg p-2 font-bold">
          Problem Solving
        </div>
      </dev>
    </>
  )
}
