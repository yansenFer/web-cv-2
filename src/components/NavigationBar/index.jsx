export const NavigationBar = () => {
  return (
    <div className=" flex sticky top-0 px-5 justify-between items-center w-screen h-20 bg-[#606C5D]">
      {/* start logo */}
      <div className="font-bold text-2xl">YansonFer</div>
      {/* end logo */}
      {/* start menu */}
      <div className="flex flex-row gap-5 pr-36 items-center">
        <button className="font-medium">Home</button>
        <button className="font-medium">Profile</button>
        <button className="font-medium">Projects</button>
        <button className="font-medium">Contact</button>
      </div>
      {/* end menu */}
    </div>
  )
}
