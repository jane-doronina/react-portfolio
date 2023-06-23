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
    <section id="about" className="w-full bg-lightGrey h-[100vh]">
      <div className="container mt-[50px]">
        <h2 className="text-7xl text-white uppercase font-bold relative bottom-[-15px] z-[0] ml-5">About me</h2>
        <div className="rounded-3xl w-[100%] h-[82vh] z-[1] relative flex">
            <div className="absolute left-[20px] w-[95%] flex justify-between py-5 z-[3]">
              <Button text="Work" padding="px-[20px]" onClick={handleClick} bg={aboutType === "Work" ? "bg-darkGrey text-white" : "bg-white text-darkGrey"}/>
              <Button text="Lifestyle" padding="px-[20px]" onClick={handleClick} bg={aboutType === "Lifestyle" ? "bg-darkGrey text-white" : "bg-white text-darkGrey"}/>
            </div>
            {aboutType === "Lifestyle" ? <LifeStyle /> : <Work />}
        </div>
      </div>
    </section>
  )
}

export default About
