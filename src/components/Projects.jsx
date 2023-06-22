import { useEffect, useState } from "react"

import MenuItem from "./MenuItem"
import Screenshots from "./Screenshots"
import { projects } from "../constants"

const Projects = () => {
  const [downArrow, setDownArrow] = useState(true);

  const handleScroll = (event) => {
    console.log(event.target.scrollTop)
    if (event.target.scrollTop > 0)
      setDownArrow(false);
    else
      setDownArrow(true);
  }

  return (
    <section id="projects" className="w-full bg-lightGrey h-[100vh]">
      <div className="container mt-[50px]">
        <h2 className="text-7xl text-white uppercase font-bold relative bottom-[-15px] z-[0] ml-5">Latest projects</h2>
        <div className="bg-white rounded-3xl w-[100%] h-[80vh] z-[1] relative flex">
          <div className="w-[30%] h-[100%] rounded-l-3xl bg-darkGrey py-10 px-3">
            <MenuItem name="Remost" type="Full-Stack Rails App"/>
            <MenuItem name="Obscure Furniture" type="Full-Stack Rails App"/>
            <MenuItem name="Mclub Online-Shop" type="React/Redux App"/>
            <MenuItem name="Movies Watchlist" type="Full-Stack Rails App"/>
          </div>

            <Screenshots images={projects[0].images}/>
        </div>
      </div>
    </section>
  )
}

export default Projects
