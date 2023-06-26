/* eslint-disable no-unused-vars */
import backgroundImage from "../../../../assets/backgroundimage.png"
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai"

export function AboutMe() {
  const sosmedLink = (value) => {
    window.open(`${value}`)
  }

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("./cvyanson.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob)
        // Setting various property values
        let alink = document.createElement("a")
        alink.href = fileURL
        alink.download = "cvyanson.pdf"
        alink.click()
      })
    })
  }

  return (
    <div
      className="hero min-h-screen animate__animated animate__fadeInDown "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl ">
          <h1 className="mb-5 text-5xl font-bold">About Me</h1>
          <p className="mb-5 text-justify">
            my name is Yanson. I am a graduate of Bunda Mulia University
            majoring in Informatics. Currently, I have experience as a Frontend
            Developer. Some of the programming languages that I have mastered
            include TypeScript, Next.Js, React.JS, and React Native. As for CSS,
            I am proficient in using Tailwind CSS to create website user
            interfaces and Native Base for React Native (Mobile) projects.
          </p>
          <div className="flex flex-col items-center justify-center mt-14">
            <p className="mb-5 font-bold text-xl">My Social Media: </p>
            <div className="flex flex-row gap-5">
              <button
                onClick={() =>
                  sosmedLink("https://www.instagram.com/___yansen/")
                }
              >
                <AiOutlineInstagram size={36} />
              </button>
              <button
                onClick={() => {
                  sosmedLink("https://www.linkedin.com/in/yanson-f-188521168/")
                }}
              >
                <AiFillLinkedin size={36} />
              </button>
              <button
                onClick={() => {
                  sosmedLink("https://github.com/yansenFer")
                }}
              >
                <AiFillGithub size={36} />
              </button>
            </div>
          </div>
          <button className="btn btn-outline mt-10" onClick={onButtonClick}>
            Download CV
          </button>
        </div>
      </div>
    </div>
  )
}
