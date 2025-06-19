/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react'
import backgroundImage from '../../../../assets/backgroundimage.png'

export function AboutMe() {
  const sosmedLink = (value) => {
    window.open(`${value}`)
  }

  const downloadCV = () => {
    // using Java Script method to get PDF file
    const link = document.createElement('a')
    link.href = '/Yanson_Ferdinand_Kurniadi_Resume.pdf'
    link.download = 'Yanson_Ferdinand_Kurniadi_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Lazy load the social media icons
  const AiOutlineInstagram = React.lazy(() =>
    import('react-icons/ai').then((mod) => ({
      default: mod.AiOutlineInstagram,
    }))
  )
  const AiFillLinkedin = React.lazy(() =>
    import('react-icons/ai').then((mod) => ({ default: mod.AiFillLinkedin }))
  )
  const AiFillGithub = React.lazy(() =>
    import('react-icons/ai').then((mod) => ({ default: mod.AiFillGithub }))
  )

  // Lazy load the background image
  const [bgImage, setBgImage] = React.useState(null)

  React.useEffect(() => {
    const img = new window.Image()
    img.src = backgroundImage
    img.onload = () => setBgImage(backgroundImage)
  }, [])

  return (
    <section
      id="aboutme"
      className="hero min-h-screen animate__animated animate__fadeInDown "
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : 'none',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl ">
          <h1 className="mb-5 text-5xl font-bold">About Me</h1>
          <p className="mb-5 text-justify">
            My name is Yanson. I have experience as a Frontend Developer with
            2–3 years experience at PT Kloverkres Solusi Integrasi, working
            mainly with TypeScript, React.js, Next.js, and React Native.
            Familiar with building responsive web and mobile applications using
            Tailwind CSS and Chakra UI. Experienced in state management using
            Redux Toolkit, comfortable consuming RESTful APIs, and proficient
            with GitHub, and Bitbucket for version control. Able to work
            independently and collaboratively, with a focus on writing clean,
            maintainable code that supports business needs
          </p>
          <div className="flex flex-col items-center justify-center mt-14">
            <p className="mb-5 font-bold text-xl">My Social Media: </p>
            <div className="flex flex-row gap-5">
              <Suspense fallback={<div>Loading...</div>}>
                <button
                  onClick={() =>
                    sosmedLink('https://www.instagram.com/yansen.fer/')
                  }
                >
                  <AiOutlineInstagram size={36} />
                </button>
                <button
                  onClick={() => {
                    sosmedLink(
                      'https://www.linkedin.com/in/yanson-f-188521168/'
                    )
                  }}
                >
                  <AiFillLinkedin size={36} />
                </button>
                <button
                  onClick={() => {
                    sosmedLink('https://github.com/yansenFer')
                  }}
                >
                  <AiFillGithub size={36} />
                </button>
              </Suspense>
            </div>
          </div>
          <button className="btn btn-outline mt-10" onClick={downloadCV}>
            Download CV
          </button>
        </div>
      </div>
    </section>
  )
}
