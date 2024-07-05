import { FlipWordsDemo } from "./ui/FlipWordsDemo"


const Hero = () => {
  return (
    <>
        <div className="flex flex-col items-center justify-center w-full h-screen gap-32 p-5 md:flex-row md:gap-0">
        <div className="w-[50%] ">
            <img className="md:mt-0 mt-10 rounded-full md:w-[20rem] md:h-[20rem] w-[15rem] h-[15rem] object-cover" src="https://scontent.fdac11-1.fna.fbcdn.net/v/t39.30808-6/444976082_852522506708514_982502716490152003_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=pj0xFvWtp0YQ7kNvgFK52f1&_nc_ht=scontent.fdac11-1.fna&oh=00_AYA2VuBtNG8l0lOn4Ni1B2RgLTw51AHCWSghZyawp7-luA&oe=668CB658" alt="" />
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