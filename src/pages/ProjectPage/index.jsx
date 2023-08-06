import { NavigationBar } from "../../components"

export function ProjectPage() {
  return (
    <div className="bg-[#DDE6ED] absolute top-0 right-0 bottom-0 left-0 flex w-full">
      <NavigationBar />
      <div className="flex flex-col items-start w-screen h-full">
        <div className="font-black xl:mx-10 lg:mx-10 md:mx-10 sm:mx-10 mx-0 xl:text-5xl lg:text-5xl md:text-5xl sm:text-5xl text-2xl xl:mt-24 lg:mt-24 md:mt-24 sm:mt-24 mt-5 text-[#27374D]">
          MY PROJECTS
        </div>
        <div className="grid mt-5 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-3 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-10 mx-0">
          <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure>
              <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
