import { FlipWordsDemo } from "./ui/FlipWordsDemo"


const Hero = () => {
  return (
    <>
        <div id="home" className="flex flex-col items-center justify-center w-full h-screen gap-32 p-5  md:flex-row md:gap-0">
        <div className="w-[50%] ">
            <img className="md:mt-0 mt-10 rounded-full md:w-[20rem] md:h-[20rem] w-[40vw] h-[40vw] object-cover" src="../../public/hero.jpg" alt="" />
        </div>
        <div className="flex flex-col items-center justify-center gap-5 text-white">
            {/* <h1 className="text-5xl">Hi! There👋</h1>
            <h2 className="text-2xl">I am Mijbah as a <span className="text-yellow-300"> Web Devloper</span></h2> */}
            <FlipWordsDemo />
        </div>
        </div>
    </>
  )
}

export default Hero