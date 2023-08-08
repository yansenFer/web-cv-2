import rocket from "../../../../assets/rocketproject.png"
import tmsdashboard from "../../../../assets/tmsdashboard.png"
import webguehadir from "../../../../assets/webguehadir.png"
import dashboardguehadir from "../../../../assets/dashboardguehadir.png"
import icepose from "../../../../assets/icepose.png"
import webcalculator from "../../../../assets/webcalculator.png"
import templatedashboard from "../../../../assets/templatedashboard.png"
import klinikweb from "../../../../assets/klinikweb.png"
import firstwebcv from "../../../../assets/firstwebcv.png"
import dashboardicepose from "../../../../assets/dashboardicepose.png"
import mobilewithapi from "../../../../assets/mobilewithapi.png"

export function Projects() {
  return (
    <div className="hero min-h-screen bg-[#222831]">
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex flex-row items-center justify-center gap-2">
          <img src={rocket} className="w-10" />
          <text className="text-5xl font-bold text-neutral-content">
            My Projects
          </text>
        </div>

        {/* project card */}
        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 mt-10 xl:px-20 lg:px-16 md:px-10 sm:px-5 px-2 gap-10">
          {/* tms-dashboard */}
          <div
            onClick={() => console.log("trigger")}
            className="hover:bg-base-300 hover:shadow-lg hover:shadow-black transition-all duration-300 card w-[100%] max-h-[100%] bg-base-200 shadow-xl"
          >
            <figure>
              <img src={tmsdashboard} alt="Tms-dashboard" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-neutral-content font-bold text-left">
                TMS Dashboard (Ticket Management System for PT. Guehadir Untuk
                Indonesia)
              </h2>
              <h3 className="text-neutral-content text-left">
                PT. Kloverkres Solusi Integrasi
              </h3>
            </div>
            <div className="card-body">
              {/* <p className="text-justify text-neutral-content">
                This is the first project I took on when I started working as a
                frontend developer. I am the sole member of the frontend team,
                and in this project I learned about frontend development using
                the Next.js framework, TypeScript language, and also Restful API
                services. When I first took over the tms-dashboard, the project
                was only about 15% complete.
              </p> */}

              <div className="card-actions mt-5 justify-end">
                <div className="badge badge-outline py-3 text-neutral-content border-red-600">
                  Next.Js
                </div>
                <div className="badge badge-outline py-3 text-neutral-content border-cyan-600">
                  Typescript
                </div>
                <div className="badge badge-outline py-3 text-neutral-content border-blue-600">
                  Tailwind Css
                </div>
              </div>
            </div>
          </div>
          {/* end tms-dashboard */}

          {/* tms-dashboard */}
          <div
            onClick={() => console.log("trigger")}
            className="hover:bg-base-300 hover:shadow-lg hover:shadow-black transition-all duration-300 card w-[100%] max-h-[100%] bg-base-200 shadow-xl"
          >
            <figure>
              <img src={webguehadir} alt="webguehadir" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-neutral-content font-bold text-left">
                Website Guehadir
              </h2>
              <h3 className="text-neutral-content text-left">
                PT. Kloverkres Solusi Integrasi
              </h3>
            </div>
            <div className="card-body justify-end">
              <div className="card-actions mt-5 justify-end">
                <div className="badge badge-outline py-3 text-neutral-content border-red-600">
                  React.Js
                </div>
                <div className="badge badge-outline py-3 text-neutral-content border-cyan-600">
                  Jsx
                </div>
                <div className="badge badge-outline py-3 text-neutral-content border-blue-600">
                  Tailwind Css
                </div>
              </div>
            </div>
          </div>
          {/* end tms-dashboard */}

          {/* dashboard guehadir */}
          <div
            onClick={() => console.log("trigger")}
            className="hover:bg-base-300 hover:shadow-lg hover:shadow-black transition-all duration-300 card w-[100%] max-h-[100%] bg-base-200 shadow-xl"
          >
            <figure>
              <img src={dashboardguehadir} alt="dashboard guehadir" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-neutral-content font-bold text-left">
                Dashboard Guehadir (Dashboard for website guehadir)
              </h2>
              <h3 className="text-neutral-content text-left">
                PT. Kloverkres Solusi Integrasi
              </h3>
            </div>
            <div className="card-body justify-end">
              <div className="card-actions mt-5 justify-end">
                <div className="badge badge-outline py-3 text-neutral-content border-red-600">
                  React.Js
                </div>
                <div className="badge badge-outline py-3 text-neutral-content border-cyan-600">
                  Typescript
                </div>
                <div className="badge badge-outline py-3 text-neutral-content border-blue-600">
                  Chakra UI
                </div>
              </div>
            </div>
          </div>
          {/* end dasboard guehadir */}

          {/* icepose */}
          <div
            onClick={() => console.log("trigger")}
            className="hover:bg-base-300 hover:shadow-lg hover:shadow-black transition-all duration-300 card w-[100%] max-h-[100%] bg-base-200 shadow-xl"
          >
            <figure>
              <img src={icepose} alt="icepose" className="w-[35%]" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-neutral-content font-bold text-left">
                Icepose Apps (Apps for order ice cream at the booth.)
              </h2>
              <h3 className="text-neutral-content text-left">
                PT. Kloverkres Solusi Integrasi
              </h3>
            </div>
            <div className="card-body justify-end">
              <div className="card-actions mt-5 justify-end">
                <div className="badge badge-outline py-3 text-neutral-content border-red-600">
                  React Native
                </div>
                <div className="badge badge-outline py-3 text-neutral-content border-cyan-600">
                  Typescript
                </div>
                <div className="badge badge-outline py-3 text-neutral-content border-blue-600">
                  Native Base
                </div>
              </div>
            </div>
          </div>
          {/* end icepose */}

          {/* web calculator */}
          <div
            onClick={() => console.log("trigger")}
            className="hover:bg-base-300 hover:shadow-lg hover:shadow-black transition-all duration-300 card w-[100%] max-h-[100%] bg-base-200 shadow-xl"
          >
            <figure>
              <img src={webcalculator} alt="web calculator" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-neutral-content font-bold text-left">
                Web Calculator (I was just casually trying to create a web
                calculator.)
              </h2>
              <h3 className="text-neutral-content text-left">My Own Project</h3>
            </div>
            <div className="card-body justify-end">
              <div className="card-actions mt-5 justify-end">
                <div className="badge badge-outline py-3 text-neutral-content border-red-600">
                  React.Js
                </div>
                <div className="badge badge-outline py-3 text-neutral-content border-cyan-600">
                  Typescript
                </div>
                <div className="badge badge-outline py-3 text-neutral-content border-blue-600">
                  Tailwind Css
                </div>
              </div>
            </div>
          </div>
          {/* end web calculator */}

          {/* web calculator */}
          <div
            onClick={() => console.log("trigger")}
            className="hover:bg-base-300 hover:shadow-lg hover:shadow-black transition-all duration-300 card w-[100%] max-h-[100%] bg-base-200 shadow-xl"
          >
            <figure>
              <img src={templatedashboard} alt="template dashboard" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-neutral-content font-bold text-left">
                Trying to Create My Own Dashboard Template
              </h2>
              <h3 className="text-neutral-content text-left">My Own Project</h3>
            </div>
            <div className="card-body justify-end">
              <div className="card-actions mt-5 justify-end">
                <div className="badge badge-outline py-3 text-neutral-content border-red-600">
                  Next.Js
                </div>
                <div className="badge badge-outline py-3 text-neutral-content border-cyan-600">
                  Typescript
                </div>
                <div className="badge badge-outline py-3 text-neutral-content border-blue-600">
                  Tailwind Css
                </div>
              </div>
            </div>
          </div>
          {/* end web calculator */}

          {/* web dashboard Klinik */}
          <div
            onClick={() => console.log("trigger")}
            className="hover:bg-base-300 hover:shadow-lg hover:shadow-black transition-all duration-300 card w-[100%] max-h-[100%] bg-base-200 shadow-xl"
          >
            <figure>
              <img src={klinikweb} alt="web Klinik" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-neutral-content font-bold text-left">
                Dashboard Web Klinik
              </h2>
              <h3 className="text-neutral-content text-left">
                PT. Kloverkres Solusi Integrasi
              </h3>
            </div>
            <div className="card-body justify-end">
              <div className="card-actions mt-5 justify-end">
                <div className="badge badge-outline py-3 text-neutral-content border-red-600">
                  Next.Js
                </div>
                <div className="badge badge-outline py-3 text-neutral-content border-cyan-600">
                  Typescript
                </div>
                <div className="badge badge-outline py-3 text-neutral-content border-blue-600">
                  Tailwind Css
                </div>
              </div>
            </div>
          </div>
          {/* end dashboard klinik */}

          {/* web dashboard Klinik */}
          <div
            onClick={() => console.log("trigger")}
            className="hover:bg-base-300 hover:shadow-lg hover:shadow-black transition-all duration-300 card w-[100%] max-h-[100%] bg-base-200 shadow-xl"
          >
            <figure>
              <img src={firstwebcv} alt="web Klinik" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-neutral-content font-bold text-left">
                My first web cv
              </h2>
              <h3 className="text-neutral-content text-left">My Own Project</h3>
            </div>
            <div className="card-body justify-end">
              <div className="card-actions mt-5 justify-end">
                <div className="badge badge-outline py-3 text-neutral-content border-red-600">
                  Next.Js
                </div>
                <div className="badge badge-outline py-3 text-neutral-content border-cyan-600">
                  Typescript
                </div>
                <div className="badge badge-outline py-3 text-neutral-content border-blue-600">
                  Tailwind Css
                </div>
              </div>
            </div>
          </div>
          {/* end dashboard klinik */}

          {/* web dashboard Klinik */}
          <div
            onClick={() => console.log("trigger")}
            className="hover:bg-base-300 hover:shadow-lg hover:shadow-black transition-all duration-300 card w-[100%] max-h-[100%] bg-base-200 shadow-xl"
          >
            <figure>
              <img src={dashboardicepose} alt="web Klinik" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-neutral-content font-bold text-left">
                Dashboard IcePose
              </h2>
              <h3 className="text-neutral-content text-left">
                PT. Kloverkres Solusi Integrasi
              </h3>
            </div>
            <div className="card-body justify-end">
              <div className="card-actions mt-5 justify-end">
                <div className="badge badge-outline py-3 text-neutral-content border-red-600">
                  React.Js
                </div>
                <div className="badge badge-outline py-3 text-neutral-content border-cyan-600">
                  Typescript
                </div>
                <div className="badge badge-outline py-3 text-neutral-content border-blue-600">
                  Tailwind Css
                </div>
              </div>
            </div>
          </div>
          {/* end dashboard klinik */}

          {/* mobile with api */}
          <div
            onClick={() => console.log("trigger")}
            className="hover:bg-base-300 hover:shadow-lg hover:shadow-black transition-all duration-300 card w-[100%] max-h-[100%] bg-base-200 shadow-xl"
          >
            <figure>
              <img src={mobilewithapi} alt="web Klinik" className="w-[35%]" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-neutral-content font-bold text-left">
                Trying create mobile apps with intergration API and live search
              </h2>
              <h3 className="text-neutral-content text-left">My Own Project</h3>
            </div>
            <div className="card-body justify-end">
              <div className="card-actions mt-5 justify-end">
                <div className="badge badge-outline py-3 text-neutral-content border-red-600">
                  React Native
                </div>
                <div className="badge badge-outline py-3 text-neutral-content border-cyan-600">
                  Typescript
                </div>
                <div className="badge badge-outline py-3 text-neutral-content border-blue-600">
                  Native Base
                </div>
              </div>
            </div>
          </div>
          {/* end mobile with api */}
        </div>
      </div>
    </div>
  )
}
