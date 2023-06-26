/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export function Education({ isAnimated }) {
  return (
    <>
      <span
        className={`text-5xl xl:mx-10 lg:mx-10 md:mx-10 sm:mx-0 mx-0 font-bold text-[#27374D] items-start mt-10 ${
          isAnimated
            ? "animate__animated animate__bounceInLeft animate__slow"
            : "invisible"
        }`}
      >
        Education
      </span>
      <div
        className={`flex mx-10 flex-row text-[#27374D] justify-between ${
          isAnimated
            ? "animate__animated animate__fadeInUp animate__fast animate__delay-2s"
            : "invisible"
        }`}
      >
        <ul className="steps mt-10 xl:steps-vertical lg:steps-vertical md:steps-vertical sm:steps-horizontal steps-horizontal">
          <li data-content="✓" className="step step-accent">
            <div className="flex flex-col items-start text-left mr-10">
              <p className="font-bold mt-5">
                2018 - 2022 Universitas Bunda Mulia
              </p>
              <p>Information Technology</p>
              <p>Tangerang Selatan</p>
              <p>Grade: 3.58</p>
            </div>
          </li>
          <li data-content="✓" className="step step-accent">
            <div className="flex flex-col items-start text-left">
              <p className="font-bold">2015 - 2018 SMK Yadika 4</p>
              <p>Computer and Network Engineering</p>
              <p>Kota Tangerang</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}
