import ksi from "../../../../assets/ksi.png"
import mayora from "../../../../assets/mayora.png"
import sbb from "../../../../assets/sbb.png"

export function Experience() {
  return (
    <>
      <span className="text-5xl mx-10 font-bold text-[#27374D] items-start mt-10">
        Experience
      </span>
      <div className="card mx-10 mt-10 w-[60%] card-side bg-[#00ADB5] shadow-xl">
        <figure>
          <img src={ksi} className="w-52" alt="Movie" />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title">PT Kloverkres Solusi Integrasi</h2>
          <div className="badge bg-[#27374D] p-2 text-white">
            FrontEnd Developer
          </div>
          <p>November 2022 - Present</p>
          <ul>
            <li className="flex flex-row gap-3 items-center justify-center">
              <div className="bg-[#27374D] rounded-full w-3 h-3" />
              <p>
                Implement Design From Figma to Mobile Application and Website
              </p>
            </li>
            <li className="flex flex-row gap-3 items-center justify-center">
              <div className="bg-[#27374D] rounded-full w-3 h-3" />
              <p>
                Creating a Website Dashboard Page based on JSON Data from
                Backend
              </p>
            </li>
            <li className="flex flex-row gap-3 items-center justify-center">
              <div className="bg-[#27374D] rounded-full w-3 h-3" />
              <p>RestAPI Integration</p>
            </li>
            <li className="flex flex-row gap-3 items-center justify-center">
              <div className="bg-[#27374D] rounded-full w-3 h-3" />
              <p>
                Using Responsive Design in Creating User Interfaces for Websites
                or Applications
              </p>
            </li>
            <li className="flex flex-row gap-3 items-center justify-center">
              <div className="bg-[#27374D] rounded-full w-3 h-3" />
              <p>
                Ensuring the Designed Program Interface is Aligned with the
                Provided JSON Data Requirements
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="card mx-10 mt-10 w-[60%] card-side bg-[#00ADB5] shadow-xl">
        <figure>
          <img src={mayora} className="w-52 pl-5  " alt="mayora" />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title">PT Mayora Indah Tbk</h2>
          <div className="badge bg-[#27374D] p-2 text-white">GL Accounting</div>
          <p>November 2019 - November 2022</p>
          <ul>
            <li className="flex flex-row gap-3 items-center justify-center">
              <div className="bg-[#27374D] rounded-full w-3 h-3" />
              <p>Create Financial Report</p>
            </li>
            <li className="flex flex-row gap-3 items-center justify-center">
              <div className="bg-[#27374D] rounded-full w-3 h-3" />
              <p>Checking payment voucher documents</p>
            </li>
            <li className="flex flex-row gap-3 items-center justify-center">
              <div className="bg-[#27374D] rounded-full w-3 h-3" />
              <p>Recon all account</p>
            </li>
            <li className="flex flex-row gap-3 items-center justify-center">
              <div className="bg-[#27374D] rounded-full w-3 h-3" />
              <p>process voucher payment Salary, BPJS, and Jamsostek</p>
            </li>
            <li className="flex flex-row gap-3 items-center justify-center">
              <div className="bg-[#27374D] rounded-full w-3 h-3" />
              <p>Make a letter of approval for SPT reporting</p>
            </li>
            <li className="flex flex-row gap-3 items-center justify-center">
              <div className="bg-[#27374D] rounded-full w-3 h-3" />
              <p>Recon pph 21, 23, 4(2)</p>
            </li>
            <li className="flex flex-row gap-3 items-center justify-center">
              <div className="bg-[#27374D] rounded-full w-3 h-3" />
              <p>Posting Journal</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="card mx-10 mt-10 w-[60%] card-side bg-[#00ADB5] shadow-xl">
        <figure>
          <img src={sbb} className="w-52 pl-5  " alt="mayora" />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title">PT. Solusindo Berkat Bersama</h2>
          <div className="badge bg-[#27374D] p-2 text-white">
            Admin Consultant Accounting
          </div>
          <p>September 2018 - September 2019</p>
          <ul>
            <li className="flex flex-row gap-3 items-center justify-center">
              <div className="bg-[#27374D] rounded-full w-3 h-3" />
              <p>Create a company financial report</p>
            </li>
            <li className="flex flex-row gap-3 items-center justify-center">
              <div className="bg-[#27374D] rounded-full w-3 h-3" />
              <p>Input data cash, bank, sales, purchase</p>
            </li>
            <li className="flex flex-row gap-3 items-center justify-center">
              <div className="bg-[#27374D] rounded-full w-3 h-3" />
              <p>Recon (cash, bank, sales, purchase, debit, credit)</p>
            </li>
            <li className="flex flex-row gap-3 items-center justify-center">
              <div className="bg-[#27374D] rounded-full w-3 h-3" />
              <p>Recon ppn and pph</p>
            </li>
            <li className="flex flex-row gap-3 items-center justify-center">
              <div className="bg-[#27374D] rounded-full w-3 h-3" />
              <p>Salary recap</p>
            </li>
            <li className="flex flex-row gap-3 items-center justify-center">
              <div className="bg-[#27374D] rounded-full w-3 h-3" />
              <p>Posting journal</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
