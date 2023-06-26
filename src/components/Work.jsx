import work from "../assets/work.jpg"
import stack from "../assets/stack.png"
import { me } from "../constants"
import { FrontCard, BackCard } from "./Card"
import ReactFlipCard from 'reactjs-flip-card';

const Work = () => {

  return (
    <div className="flex z-[2] w-[100%] animate-image">
      <div className="w-[70%] rounded-l-3xl bg-white p-10 pt-[90px]">
        <p className="bg-lightGrey p-6 rounded-xl">{me.bio}</p>
        <h3 className="text-lg font-bold mt-4">Technologies</h3>
        <img src={stack} alt="Techstack" />
        <div className="grid grid-cols-3 gap-3 justify-between mt-4">
          {me.questions.map((question, i) => {
            return <ReactFlipCard key={i} flipCardStyle={{width: "230px", height: "240px"}} flipTrigger='onClick'
                    frontComponent={<FrontCard topic={question.topic} />}
                    backComponent={<BackCard question={question}/>} />
          })}
        </div>
      </div>
      <img src={work} alt="Zhanna at work" className="w-[30%] h-[100%] object-cover rounded-r-3xl"/>
    </div>
  )
}

export default Work
