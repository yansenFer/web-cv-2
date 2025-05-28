import { AiFillContacts } from 'react-icons/ai'
import whatsapp from '../../../../assets/whatsapp.png'
import gmail from '../../../../assets/gmail.png'

export function ContactsPage() {
  return (
    <section id="contactme" className="hero min-h-screen mb-20">
      <div className="flex flex-col w-full xl:px-20 lg:px-20 md:px-10 sm:px-5 px-1">
        <div className="flex flex-col items-center mt-20 justify-center gap-4">
          <div className="flex flex-row gap-4">
            <AiFillContacts color="black" size={40} />
            <text className="text-5xl font-bold text-black">Contact Me</text>
          </div>
          <div className="w-[300px] mt-10 ">
            <h3 className="text-black  items-center font-semibold flex flex-row gap-3">
              <img src={gmail} className="w-8 h-8" />
              yansenferdinand6@gmail.com
            </h3>
            <h3 className="text-black text-left mt-5 items-center font-semibold flex flex-row gap-3">
              <img src={whatsapp} className="w-8 h-8" />
              0813-8400-4840
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
