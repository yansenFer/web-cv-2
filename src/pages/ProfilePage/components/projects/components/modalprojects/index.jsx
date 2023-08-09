/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import rocket from "../../../../../../assets/rocketproject.png"
import tmsdashboard from "../../../../../../assets/tmsdashboard.png"
import webguehadir from "../../../../../../assets/webguehadir.png"
import dashboardguehadir from "../../../../../../assets/dashboardguehadir.png"
import icepose from "../../../../../../assets/icepose.png"
import webcalculator from "../../../../../../assets/webcalculator.png"
import templatedashboard from "../../../../../../assets/templatedashboard.png"
import klinikweb from "../../../../../../assets/klinikweb.png"
import firstwebcv from "../../../../../../assets/firstwebcv.png"
import dashboardicepose from "../../../../../../assets/dashboardicepose.png"
import mobilewithapi from "../../../../../../assets/mobilewithapi.png"

export function IsiModal(modalproject) {
  const handleIsiModal = () => {
    if (modalproject.modalproject === "tmsdashboard") {
      return (
        <>
          <h1 className="text-neutral-content font-bold text-left text-2xl">
            TMS Dashboard (Ticket Management System for PT. Guehadir Untuk
            Indonesia)
          </h1>
          <h3 className="text-neutral-content text-left">
            PT. Kloverkres Solusi Integrasi
          </h3>
          <img src={tmsdashboard} className="object-contain rounded-lg mt-5" />
          <p className="py-4 text-left">
            This is the first project I took on when I started working as a
            frontend developer. I am the sole member of the frontend team, and
            in this project I learned about frontend development using the
            Next.js framework, TypeScript language, and also Restful API
            services. When I first took over the tms-dashboard, the project was
            only about 15% complete.
          </p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </>
      )
    } else if (modalproject.modalproject === "webguehadir") {
      return (
        <>
          <h1 className="text-neutral-content font-bold text-left text-2xl">
            Web Guehadir
          </h1>
          <h3 className="text-neutral-content text-left">
            PT. Kloverkres Solusi Integrasi
          </h3>
          <img src={webguehadir} className="object-contain rounded-lg mt-5" />
          <p className="py-4 text-left">
            This project was originally created from scratch by one of my
            colleagues in this company, who served as a fullstack developer and
            was also my senior. Unfortunately, he has resigned, so now I am the
            one in charge of the web project. What I am doing on this guehadir
            website is only adding additional features requested by clients. In
            this guehadir website, I am solely responsible for the frontend.
          </p>
          <p className="py-4 text-left">
            You can see this project by clicking the button below
          </p>
          <div className="flex justify-start">
            <button
              onClick={() => window.open("https://guehadir.id/")}
              className="py-2 px-4 rounded-lg text-left bg-gray-100 text-black  hover:bg-gray-600 hover:shadow-md hover:shadow-black duration-300 "
            >
              Go to website
            </button>
          </div>

          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </>
      )
    } else if (modalproject.modalproject === "dashboardguehadir") {
      return (
        <>
          <h1 className="text-neutral-content font-bold text-left text-2xl">
            Dashboard Guehadir (Dashboard for website guehadir)
          </h1>
          <h3 className="text-neutral-content text-left">
            PT. Kloverkres Solusi Integrasi
          </h3>
          <img
            src={dashboardguehadir}
            className="object-contain rounded-lg mt-5"
          />
          <p className="py-4 text-left">
            This project was originally created from scratch by one of my
            colleagues in this company, who served as a fullstack developer and
            was also my senior. Unfortunately, he has resigned, so now I am the
            one in charge of the dashboard project. What I am doing on this
            guehadir dashboard is only adding additional features requested by
            clients. In this guehadir dashboard, I am solely responsible for the
            frontend.
          </p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </>
      )
    } else if (modalproject.modalproject === "icepose") {
      return (
        <>
          <h1 className="text-neutral-content font-bold text-left text-2xl">
            Icepose Apps (Apps for order ice cream at the booth)
          </h1>
          <h3 className="text-neutral-content text-left">
            PT. Kloverkres Solusi Integrasi
          </h3>
          <div className="w-full flex justify-center mt-5 items-center">
            <img src={icepose} className="object-contain rounded-lg  w-[35%]" />
          </div>
          <p className="py-4 text-left">
            This is the second project I have worked on independently. This
            application is for placing ice cream orders and will be available at
            each booth, using Android devices with a sufficiently large screen
            size. In this project, my role is as a frontend developer. The
            project is developed using React Native, and for creating components
            and styling, I am using Native Base. For the RESTful API, I
            consistently use the axios library, and for managing global state in
            this project I employ the Easy Peasy library.
          </p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </>
      )
    } else if (modalproject.modalproject === "webcalculator") {
      return (
        <>
          <h1 className="text-neutral-content font-bold text-left text-2xl">
            Web Calculator (I was just casually trying to create a web
            calculator.)
          </h1>
          <h3 className="text-neutral-content text-left">My Own Project</h3>
          <div className="w-full flex justify-center mt-5 items-center">
            <img src={webcalculator} className="object-contain rounded-lg" />
          </div>
          <p className="py-4 text-left">
            In this project, I was just casually trying to create a web-based
            calculator for fun. The outcome might not be extraordinary, but I
            feel happy because I managed to create it by utilizing the logic
            that I had in my mind.
          </p>
          <p className="py-4 text-left">
            You can see this project by clicking the button below
          </p>
          <div className="flex justify-start">
            <button
              onClick={() =>
                window.open("https://yansenfer.github.io/web-calculator/")
              }
              className="py-2 px-4 rounded-lg text-left bg-gray-100 text-black  hover:bg-gray-600 hover:shadow-md hover:shadow-black duration-300 "
            >
              Go to website
            </button>
          </div>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </>
      )
    } else if (modalproject.modalproject === "templatedashboard") {
      return (
        <>
          <h1 className="text-neutral-content font-bold text-left text-2xl">
            Trying to Create My Own Dashboard Template
          </h1>
          <h3 className="text-neutral-content text-left">My Own Project</h3>
          <div className="w-full flex justify-center mt-5 items-center">
            <img
              src={templatedashboard}
              className="object-contain rounded-lg"
            />
          </div>
          <p className="py-4 text-left">
            This is one of my side projects, in which I wanted to experiment
            with creating my own dashboard template. Even though the result is
            not groundbreaking, I feel pleased to have successfully worked on
            crafting my own dashboard template.
          </p>
          <p className="py-4 text-left">
            You can see this project by clicking the button below
          </p>
          <div className="flex justify-start">
            <button
              onClick={() =>
                window.open("https://dashboard-barang.vercel.app/")
              }
              className="py-2 px-4 rounded-lg text-left bg-gray-100 text-black  hover:bg-gray-600 hover:shadow-md hover:shadow-black duration-300 "
            >
              Go to website
            </button>
          </div>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </>
      )
    } else if (modalproject.modalproject === "dashboardklinik") {
      return (
        <>
          <h1 className="text-neutral-content font-bold text-left text-2xl">
            Dashboard Web Klinik
          </h1>
          <h3 className="text-neutral-content text-left">
            PT. Kloverkres Solusi Integrasi
          </h3>
          <img src={klinikweb} className="object-contain rounded-lg mt-5" />
          <p className="py-4 text-left">
            This project was originally created from scratch by one of my
            colleagues in this company, who served as a fullstack developer and
            was also my senior. Unfortunately, he has resigned, so now I am the
            one in charge of the dashboard project. What I am doing on this
            Projects is only adding additional features requested by clients. In
            this project, I am solely responsible for the frontend.
          </p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </>
      )
    } else if (modalproject.modalproject === "firstwebcv") {
      return (
        <>
          <h1 className="text-neutral-content font-bold text-left text-2xl">
            My first web cv
          </h1>
          <h3 className="text-neutral-content text-left">My Own Project</h3>
          <div className="w-full flex justify-center mt-5 items-center">
            <img src={firstwebcv} className="object-contain rounded-lg" />
          </div>
          <p className="py-4 text-left">
            It all began when my workplace was searching for a new candidate for
            the fullstack developer position. I happened to come across their CV
            and noticed that they had a personal website. Seeing that inspired
            me to try creating my own web-based CV as well. The outcome became
            my very first personal web CV.
          </p>
          <p className="py-4 text-left">
            You can see this project by clicking the button below
          </p>
          <div className="flex justify-start">
            <button
              onClick={() => window.open("https://web-cv-five.vercel.app/")}
              className="py-2 px-4 rounded-lg text-left bg-gray-100 text-black  hover:bg-gray-600 hover:shadow-md hover:shadow-black duration-300 "
            >
              Go to website
            </button>
          </div>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </>
      )
    } else if (modalproject.modalproject === "dashboardicepose") {
      return (
        <>
          <h1 className="text-neutral-content font-bold text-left text-2xl">
            Dashboard IcePose
          </h1>
          <h3 className="text-neutral-content text-left">
            PT. Kloverkres Solusi Integrasi
          </h3>
          <img
            src={dashboardicepose}
            className="object-contain rounded-lg mt-5"
          />
          <p className="py-4 text-left">
            This project is a dashboard for managing the master data of the
            mobile app I developed. In this project, I serve as the frontend
            developer, and I am the sole contributor working on it.
          </p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </>
      )
    } else if (modalproject.modalproject === "firstmobileapps") {
      return (
        <>
          <h1 className="text-neutral-content font-bold text-left text-2xl">
            Trying create mobile apps with intergration API and live search
          </h1>
          <h3 className="text-neutral-content text-left">My Own Project</h3>
          <div className="flex w-full justify-center items-center">
            <img
              src={mobilewithapi}
              className="object-contain rounded-lg mt-5 w-[35%]"
            />
          </div>

          <p className="py-4 text-left">
            In this project, I'm simply experimenting with creating a mobile app
            using the React Native framework, integrating APIs, and displaying
            their data. Additionally, I've playfully attempted to implement a
            live search feature that operates without requiring the user to
            press a search button or trigger any action.
          </p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </>
      )
    }
  }

  return (
    <form method="dialog" className="modal-box w-11/12 max-w-5xl">
      {handleIsiModal()}
    </form>
  )
}
