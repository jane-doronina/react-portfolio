import Button from "./Button";
import LifeStyle from "./LifeStyle";
import Work from "./Work";
import { useState } from "react";

const About = () => {
  const [aboutType, setAboutType] = useState("Work");

  const handleClick = (e) => {
    setAboutType(e.target.innerText)
  }

  return (
    <section id="about" className="w-full bg-lightGrey mb-6 md:mb-14">
      <div className="container px-2 md:px-0 mt-[50px]">
        <h2 className="text-5xl md:text-7xl text-white uppercase font-bold relative bottom-[-10px] md:bottom-[-15px] z-[0] ml-5">About me</h2>
        <div className="rounded-3xl overflow-hidden w-[100%] md:h-[84vh] z-[1] relative">
            <div className="absolute w-[100%] flex justify-start items-center py-5 px-4 md:px-10 z-[3]">
              <Button text="Work" padding="px-[20px]" onClick={handleClick} bg={aboutType === "Work" ? "bg-darkGrey text-white font-normal" : "bg-white text-darkGrey"}/>
              <div className={`w-[6px] h-[6px] ${aboutType === "Work" ? "bg-darkGrey" : "bg-lightGrey"} rounded-full mx-3`}></div>
              <Button text="Lifestyle" padding="px-[20px]" onClick={handleClick} bg={aboutType === "Lifestyle" ? "bg-gray-300 text-darkGrey font-normal" : "bg-grey text-white"}/>
            </div>
            {aboutType === "Lifestyle" ? <LifeStyle /> : <Work />}
        </div>
      </div>
    </section>
  )
}

export default About
