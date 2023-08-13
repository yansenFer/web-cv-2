import { AiFillContacts } from "react-icons/ai"
import whatsapp from "../../../../assets/whatsapp.png"
import gmail from "../../../../assets/gmail.png"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { BiLoaderCircle } from "react-icons/bi"
import { toast } from "react-toastify"

export function ContactsPage() {
  const [contactId, setContactId] = useState("")
  const [name, setname] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleWhatsapp = () => {
    const phoneNumber = "6281384004840"
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`

    window.open(whatsappUrl, "_blank")
  }

  const sendEmail = () => {
    console.log("kirim email", email)
    if (name !== "" && email !== "" && message !== "") {
      setIsLoading(true)

      emailjs
        .send(
          "service_9slsjih",
          "template_ddx5f66",
          {
            from_name: name,
            message: message,
            from_email: email,
          },
          "cFmcaUGXhujyrUqof"
        )
        .then(
          (result) => {
            if (result.status === 200) {
              setIsLoading(false)
              setname("")
              setEmail("")
              setMessage("")
              toast.success("The email has been successfully sent")
            }
          },
          (error) => {
            setIsLoading(false)
            console.log(error.txt)
            toast.error("The email failed to be sent")
          }
        )
    }
  }

  return (
    <section id="contactme" className="hero min-h-screen mb-20">
      <div className="flex flex-col w-full xl:px-20 lg:px-20 md:px-10 sm:px-5 px-1">
        <div className="flex flex-row items-center mt-20 justify-center gap-4">
          <AiFillContacts color="black" size={40} />
          <text className="text-5xl font-bold text-black">Contact Me</text>
        </div>
        <h3 className="text-black mt-5 font-semibold">
          This is my contact , you can click on the image below.
        </h3>
        <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col gap-10 justify-center items-center mt-10">
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
              <>
                <form className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setname(e.currentTarget.value)}
                    className="p-3 rounded-lg border-[1px]"
                    placeholder="Your Name"
                  />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    type="email"
                    className="p-3 rounded-lg border-[1px] "
                    placeholder="Your Email"
                  />
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.currentTarget.value)}
                    className="p-3 xl:col-span-2 lg:col-span-2 md:col-span-2 sm:col-span-1 col-span-1 rounded-lg border-[1px] "
                    placeholder="Message"
                  />
                </form>
                {isLoading ? (
                  <button
                    onClick={() => sendEmail()}
                    type="button"
                    disabled
                    className="py-2 px-3 items-center justify-center flex gap-2 w-full bg-gray-800 xl:col-span-2 lg:col-span-2 md:col-span-2 sm:col-span-1 col-span-1 hover:bg-gray-900 duration-300 transition-all hover:shadow-md hover:shadow-black rounded-lg mt-10"
                  >
                    <BiLoaderCircle className="animate-spin" size={20} />
                    Sending...
                  </button>
                ) : (
                  <button
                    onClick={() => sendEmail()}
                    type="button"
                    className="py-2 px-3 w-full bg-gray-800 xl:col-span-2 lg:col-span-2 md:col-span-2 sm:col-span-1 col-span-1 hover:bg-gray-900 duration-300 transition-all hover:shadow-md hover:shadow-black rounded-lg mt-10"
                  >
                    Send Email
                  </button>
                )}
              </>
            )
          )}
        </div>
      </div>
    </section>
  )
}
