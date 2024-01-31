
function Background() {
    let todayDate = new Date();
    let currYear = todayDate.getFullYear();

  return (
    <>
        <div className="w-full h-screen fixed bg-zinc-800 flex justify-center items-center  text-zinc-600/85 font-semibold">
            <div className='  lg:text-[10rem] md:text-8xl text-6xl '
            >
                notes.
            </div>
            <div className="absolute bottom-0  text-zinc-500/80 mb-4 ">
                &copy; Balaji Upadhyay {currYear}
            </div>
        </div>
    </>
  )
}

export default Background