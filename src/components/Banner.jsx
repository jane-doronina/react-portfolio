import avatar from "../assets/avatar.jpg";

const Banner = () => (
  <header className="pt-[80px] relative">
    <div className='container px-6 md:px-0 flex flex-col md:flex-row md:items-center md:justify-between'>
      <div className="animated-title h-[200px] md:h-[300px] text-[35px] md:text-[60px] font-bold z-[1]">
        <div className="text-top h-[50%] top-0 border-b-[3px] md:border-b-4 border-b-darkGrey">
          <div className="absolute py-[2vmin] px-0">
            <span className="block leading-[40px] md:leading-[55px]">Full-Stack Developer.</span>
            <span className="block text-grey">Design Enthusiast.</span>
          </div>
        </div>
        <div className="text-bottom h-[50%] bottom-0">
          <div className="absolute py-[2vmin] px-0 text-[25px] md:text-[50px] leading-[50px]">With Marketing Background.</div>
        </div>
      </div>
      <img src={avatar} alt="Jane Doronina photo" className="hidden md:block w-[380px] h-[520px] object-cover z-[1]"/>
    </div>
    <div className='bg-white w-[100vw] h-[38%] md:h-[68%] absolute left-0 top-0 z-[0]'/>
  </header>
)

export default Banner
