import avatar from "../assets/avatar.jpg";

const Banner = () => (
  <header className="pt-[80px] relative">
    <div className='container flex items-center justify-between'>
      <div className="animated-title text-[60px] font-bold z-[1]">
        <div className="text-top top-0 border-b-4 border-b-darkGrey">
          <div className="absolute py-[2vmin] px-0">
            <span className="block leading-[55px]">Full-Stack Developer.</span>
            <span className="block text-grey">Design Enthusiast.</span>
          </div>
        </div>
        <div className="text-bottom bottom-0">
          <div className="absolute py-[2vmin] px-0 text-[50px] leading-[50px]">With Marketing Background.</div>
        </div>
      </div>
      <img src={avatar} alt="Jane Doronina photo" className="w-[380px] h-[520px] object-cover z-[1]"/>
    </div>
    <div className='bg-white w-[100vw] h-[68%] absolute left-0 top-0 z-[0]'/>
  </header>
)

export default Banner
