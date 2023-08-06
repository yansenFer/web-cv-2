/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import kloverkres1 from "../../../../assets/kloverkres2.jpg"
import kloverkres2 from "../../../../assets/kloverkres1.jpeg"
import kloverkres3 from "../../../../assets/kloverkres3.jpg"

import mayora1 from "../../../../assets/mayora1.jpg"
import mayora2 from "../../../../assets/mayora2.jpg"
import mayora3 from "../../../../assets/mayora3.jpg"
import mayora4 from "../../../../assets/mayora4.jpg"

import sbb1 from "../../../../assets/sbb1.jpg"
import sbb2 from "../../../../assets/sbb2.jpg"
import sbb3 from "../../../../assets/sbb3.jpg"

import { BsFillBuildingsFill } from "react-icons/bs"

export function Experience() {
  return (
    <div className="hero min-h-screen">
      <div className="flex flex-col w-full xl:px-20 lg:px-20 md:px-10 sm:px-5 px-1">
        <div className="flex flex-row items-cente justify-center gap-4">
          <BsFillBuildingsFill color="black" size={35} />
          <text className="text-5xl font-bold text-black">Experiences</text>
        </div>

        {/* ksi */}
        <div className="flex mt-10 text-left gap-10 xl:justify-between lg:justify-between md:justify-center sm:justify-center justify-center xl:flex-row lg:flex-row md:flex-col: sm:flex-col: flex-col">
          <div className="flex xl:max-w-[60%] lg:max-w-[60%] md:max-w-none sm:max-w-none max-w-none flex-col gap-5">
            <div className="flex flex-col">
              <text className="text-black font-bold text-3xl">
                PT. Kloverkres Solusi Integrasi
              </text>
              <text className="text-black">
                November 2022 - Still working here
              </text>
            </div>
            <text className="text-black font-semibold text-justify">
              This is the first place where I work in the IT world. I have been
              working here since November 2020 until now. I hold the position of
              a Frontend developer at this office, and some common tasks that I
              do here are:
            </text>
            <div className="flex text-black font-semibold flex-col gap-2">
              <text>● Implement Design to Mobile Application</text>
              <text>
                ● Creating a Website Dashboard Page based on JSON Data from
                Backend
              </text>
              <text>
                ● Using Responsive Design in Creating User Interfaces for
                Websites or Applications
              </text>
              <text>
                ● Ensuring the Designed Program Interface is Aligned with the
                Provided JSON Data requirements
              </text>
            </div>
          </div>
          <div className="carousel xl:w-[40%] lg:w-[40%] md:w-full sm:w-full w-full">
            <div
              id="slide1"
              className="carousel-item justify-center relative w-full"
            >
              <img src={kloverkres1} className="w-[90%] object-contain" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide2"
              className="carousel-item items-center justify-center relative w-full"
            >
              <img
                src={kloverkres2}
                className="w-[60%] h-[100%] object-contain"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide3"
              className="carousel-item justify-center relative w-full"
            >
              <img
                src={kloverkres3}
                className="w-[60%] h-[100%] object-contain"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* end ksi */}

        {/* Mayora indah tbk */}
        <div className="flex text-left mt-20 gap-10 xl:justify-between lg:justify-between md:justify-center sm:justify-center justify-center xl:flex-row lg:flex-row md:flex-col: sm:flex-col: flex-col">
          <div className="flex xl:max-w-[60%] lg:max-w-[60%] md:max-w-none sm:max-w-none max-w-none flex-col gap-5">
            <div className="flex flex-col">
              <text className="text-black font-bold text-3xl">
                PT. Mayora Indah Tbk
              </text>
              <text className="text-black">November 2019 - November 2022</text>
            </div>
            <text className="text-black font-semibold text-justify">
              This is one of the most comfortable offices I have worked in. I
              worked here from November 2019 until November 2022 as a GL
              Accounting staff. During my time here, I was also studying in
              college. Some of the tasks I performed here included:
            </text>
            <div className="flex text-black font-semibold flex-col gap-2">
              <text>● Create Financial Report</text>
              <text>● Checking payment voucher documents</text>
              <text>● Recon all account</text>
              <text>● process voucher payment Salary, BPJS, and Jamsostek</text>
              <text>● Make a letter of approval for SPT reporting</text>
              <text>● Recon pph 21, 23, 4(2)</text>
              <text>● Posting Journal</text>
            </div>
          </div>
          <div className="carousel xl:w-[40%] lg:w-[40%] md:w-full sm:w-full w-full">
            <div
              id="slidemayora1"
              className="carousel-item justify-center relative w-full"
            >
              <img src={mayora1} className="w-[90%] object-contain" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slidemayora4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slidemayora2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slidemayora2"
              className="carousel-item items-center justify-center relative w-full"
            >
              <img src={mayora2} className="w-[90%] h-[100%] object-contain" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slidemayora1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slidemayora3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slidemayora3"
              className="carousel-item justify-center relative w-full"
            >
              <img src={mayora3} className="w-[60%] h-[100%] object-contain" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slidemayora2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slidemayora4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slidemayora4"
              className="carousel-item justify-center relative w-full"
            >
              <img src={mayora4} className="w-[60%] h-[100%] object-contain" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slidemayora3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slidemayora1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* end mayora indah tbk */}

        {/* sbb */}
        <div className="flex text-left mt-20 gap-10 xl:justify-between lg:justify-between md:justify-center sm:justify-center justify-center xl:flex-row lg:flex-row md:flex-col: sm:flex-col: flex-col">
          <div className="flex xl:max-w-[60%] lg:max-w-[60%] md:max-w-none sm:max-w-none max-w-none flex-col gap-5">
            <div className="flex flex-col">
              <text className="text-black font-bold text-3xl">
                PT. Solusindo Berkat Bersama
              </text>
              <text className="text-black">September 2018 - October 2019</text>
            </div>
            <text className="text-black font-semibold text-justify">
              This is the first place I have worked and also the first place
              where I learned accounting. Although my background is in computer
              engineering and networking from vocational high school, while
              working at this office, I was able to learn accounting from my
              colleagues here. In this office, I hold the position of a staff
              accountant and have been working here from September 2018 until
              October 2023. Some tasks that I have been doing here are:
            </text>
            <div className="flex text-black font-semibold flex-col gap-2">
              <text>● Create a company financial report</text>
              <text>● Input data cash, bank, sales, purchase</text>
              <text>● Recon (cash, bank, sales, purchase, debit, credit)</text>
              <text>● Recon ppn dan pph</text>
              <text>● Salary recap</text>
              <text>● Posting journal</text>
            </div>
          </div>
          <div className="carousel xl:w-[40%] lg:w-[40%] md:w-full sm:w-full w-full">
            <div
              id="slidesbb1"
              className="carousel-item justify-center relative w-full"
            >
              <img src={sbb1} className="w-[90%] object-contain" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slidesbb3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slidesbb2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slidesbb2"
              className="carousel-item items-center justify-center relative w-full"
            >
              <img src={sbb2} className="w-[90%] object-contain h-[100%]" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slidesbb1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slidesbb3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slidesbb3"
              className="carousel-item justify-center relative w-full"
            >
              <img src={sbb3} className="w-[90%] object-contain h-[100%]" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slidesbb2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slidesbb1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* end sbb */}
      </div>
    </div>
  )
}
