import { AiFillContacts } from "react-icons/ai"
import whatsapp from "../../../../assets/whatsapp.png"
import gmail from "../../../../assets/gmail.png"
import { useState } from "react"

export function ContactsPage() {
  const [contactId, setContactId] = useState("")

  const handleWhatsapp = () => {
    const phoneNumber = "6281384004840"
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`

    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contactme" className="hero min-h-screen mb-20">
      <div className="flex flex-col w-full xl:px-20 lg:px-20 md:px-10 sm:px-5 px-1">
        <div className="flex flex-row items-cente mt-20 justify-center gap-4">
          <AiFillContacts color="black" size={40} />
          <text className="text-5xl font-bold text-black">Contact Me</text>
        </div>
        <h3 className="text-black mt-5 font-semibold">
          This is my contact , you can click on the image below.
        </h3>
        <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col gap-10 justify-center items-center mt-10">
          <div
            id="whatsapp"
            onClick={(e) => setContactId(e.currentTarget.id)}
            className="bg-[#222831]  p-5 rounded-lg hover:bg-gray-900 transition-all duration-300 "
          >
            <img src={whatsapp} className="w-10 h-10" />
          </div>
          <div
            id="gmail"
            onClick={(e) => setContactId(e.currentTarget.id)}
            className="bg-[#222831]  p-5 rounded-lg hover:bg-gray-900 transition-all duration-300 "
          >
            <img src={gmail} className="w-12 h-10" />
          </div>
        </div>
        <div className="mt-20">
          {contactId && contactId === "whatsapp" ? (
            <button
              onClick={handleWhatsapp}
              className="py-2 px-3 bg-gray-800 hover:bg-gray-900 duration-300 transition-all hover:shadow-md hover:shadow-black rounded-lg"
            >
              Go to whatsapp
            </button>
          ) : (
            contactId === "gmail" && (
              <text className="text-black font-bold text-3xl">
                Under Maintenance
              </text>
            )
          )}
        </div>
      </div>
    </section>
  )
}
