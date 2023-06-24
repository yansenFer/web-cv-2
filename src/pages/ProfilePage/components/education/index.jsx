export function Education() {
  return (
    <>
      <span className="text-5xl mx-10 font-bold text-[#27374D] items-start mt-10">
        Education
      </span>
      <div className="flex mx-10 flex-row text-[#27374D] justify-between">
        <ul className="steps mt-10 steps-vertical">
          <li data-content="✓" className="step step-accent">
            <div className="flex flex-col items-start">
              <p className="font-bold">2018 - 2022 Universitas Bunda Mulia</p>
              <p>Bachelor of Science Degree in Information Technology</p>
              <p>Tangerang Selatan</p>
              <p>Grade: 3.58</p>
            </div>
          </li>
          <li data-content="✓" className="step step-accent">
            <div className="flex flex-col items-start">
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
