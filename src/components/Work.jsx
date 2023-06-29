import work from "../assets/work.jpg"
import stack from "../assets/stack.png"
import { me } from "../constants"
import { FrontCard, BackCard } from "./Card"
import ReactFlipCard from 'reactjs-flip-card';

const Work = () => {

  return (
    <div className="flex flex-col md:flex-row z-[2] w-[100%] h-auto rounded-3xl bg-white animate-image">
      <div className="w-[100%] h-[100%] md:w-[70%] p-4 md:p-10 pt-[70px] md:pt-[90px]">
        <p className="bg-lightGrey p-6 rounded-xl">{me.bio}</p>
        <h3 className="text-lg font-bold mt-4">Technologies</h3>
        <img src={stack} alt="Techstack" />
        <div className="md:grid grid-cols-3 gap-3 flex flex-col justify-between mt-4">
          {me.questions.map((question, i) => {
            return <ReactFlipCard key={i} flipCardStyle={{width: "100%", height: "100%"}} flipTrigger='onClick'
                    frontComponent={<FrontCard topic={question.topic} />}
                    backComponent={<BackCard question={question}/>} />
          })}
        </div>
      </div>
      <img src={work} alt="Zhanna at work" className="hidden md:block w-[100%] md:w-[30%] object-cover rounded-r-3xl"/>
    </div>
  )
}

export default Work
