import { AiFillContacts } from "react-icons/ai"

export function ContactsPage() {
  return (
    <div className="hero min-h-screen">
      <div className="flex flex-col w-full xl:px-20 lg:px-20 md:px-10 sm:px-5 px-1">
        <div className="flex flex-row items-cente mt-20 justify-center gap-4">
          <AiFillContacts color="black" size={40} />
          <text className="text-5xl font-bold text-black">Contact Me</text>
        </div>
        <h3 className="text-black mt-5 font-semibold">
          If you wish to contact me, you can click on the image below.
        </h3>          
      </div>
    </div>
  )
}
