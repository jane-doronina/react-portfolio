import { useState } from "react"
import { useParams } from "react-router-dom";
import MenuItem from "./MenuItem"
import Button from "./Button";
import InfoWindow from "./InfoWindow"
import Screenshots from "./Screenshots"
import { projects } from "../constants"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
  const [infoIsOpen, setInfoIsOpen] = useState(false);
  const { projectId } = useParams();
  const project = projectId ? projects.find((p) => p.id === projectId) : projects[0]

  const openInfoHandler = () => {
    setInfoIsOpen((prevInfoIsOpen) => !prevInfoIsOpen)
  }

  const externalLinkHandler = (link) => {
    window.open(link);
  }

  const infoClassName = infoIsOpen ? 'info info-visible' : 'info';

  return (
    <section id="projects" className="w-full bg-lightGrey h-[100vh]">
      <div className="container mt-[50px]">
        <h2 className="text-7xl text-white uppercase font-bold relative bottom-[-15px] z-[0] ml-5">Latest projects</h2>
        <div className="bg-white rounded-3xl w-[100%] h-[80vh] z-[1] relative flex">
          <div className="w-[30%] h-[100%] rounded-l-3xl bg-darkGrey py-10 px-3">
            {projects.map(project => <MenuItem key={project.id} project={project}/>)}
          </div>
          <div className="w-[70%] relative px-14">
            <div className="absolute left-[20px] w-[95%] flex justify-between py-5">
              <Button text={infoIsOpen ? <FontAwesomeIcon icon={faXmark} className="font-light" /> : "Info" } padding={infoIsOpen ? "px-[14px]" : "px-[20px]" } onClick={openInfoHandler}/>
              <Button text="Visit website" padding="px-[20px]" icon={faArrowUpRightFromSquare} onClick={() => externalLinkHandler(projects[0].url)}/>
            </div>
            <InfoWindow project={project} visibility={infoClassName} />
            <Screenshots images={project.images}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
