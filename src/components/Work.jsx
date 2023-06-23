import { useState } from "react"
import work from "../assets/work.jpg"
import stack from "../assets/stack.png"
import { me } from "../constants"
import Button from "./Button"

const Work = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(0)

  const handleClick = (i) => {
    setSelectedQuestion(i)
  }

  return (
    <div className="flex z-[2] w-[100%] animate-image">
      <div className="w-[70%] rounded-l-3xl bg-white p-10 pt-[90px]">
        <p className="bg-lightGrey p-6 rounded-xl">{me.bio}</p>
        <h3 className="text-lg font-bold mt-4">Technologies</h3>
        <img src={stack} alt="Techstack" />
        {/* <h3 className="text-lg font-bold my-4">Values</h3> */}
        <div className="flex justify-between mt-4">
          {me.questions.map((question, i) => {
            return <p key={i} className={`${selectedQuestion === i ? "rounded-t-xl pb-4" : "rounded-xl mb-4"} py-[7px] px-[20px]  bg-lightGrey text-darkGrey font-bold`} onClick={() => handleClick(i)}>{question.topic}</p>
          })}
        </div>
        <p className={`${selectedQuestion === 1 ? "rounded-xl" : "rounded-b-xl rounded-tr-xl"} p-6 bg-lightGrey text-darkGrey font-light`}>{me.questions[selectedQuestion].answer}</p>
      </div>
      <img src={work} alt="Zhanna at work" className="w-[30%] h-[100%] object-cover rounded-r-3xl"/>
    </div>
  )
}

export default Work
