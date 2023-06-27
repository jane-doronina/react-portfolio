import { useState } from "react"
import { useParams } from "react-router-dom";
import MenuItem from "./MenuItem"
import Button from "./Button";
import InfoWindow from "./InfoWindow"
import Screenshots from "./Screenshots"
import { projects } from "../constants"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Projects = () => {
  const [infoIsOpen, setInfoIsOpen] = useState(false);
  const { projectId } = useParams();
  const selectedProject = projectId ? projects.find((p) => p.id === projectId) : projects[0]

  const openInfoHandler = () => {
    setInfoIsOpen((prevInfoIsOpen) => !prevInfoIsOpen)
  }

  const externalLinkHandler = (link) => {
    window.open(link);
  }

  const infoClassName = infoIsOpen ? 'info info-visible' : 'info';

  return (
    <section id="projects" className="w-full bg-lightGrey h-[100vh]">
      <div className="container px-2 md:px-0 mt-0 md:mt-[50px]">
        <h2 className="text-5xl md:text-7xl text-white uppercase font-bold relative bottom-[-15px] z-[0] ml-5">Latest projects</h2>
        <div className="bg-white rounded-3xl w-[100%] h-[80vh] z-[1] relative flex flex-col-reverse md:flex-row">
          <div className="w-[100%] md:w-[30%] h-[40vh] overflow-y-auto md:h-[100%] rounded-b-3xl md:rounded-l-3xl bg-darkGrey py-10 px-3">
            {projects.map(project => <MenuItem key={project.id} project={project} selected={project === selectedProject}/>)}
          </div>
          <div className="w-[100%] md:w-[70%] h-[40vh] md:h-[100%] relative px-2 md:px-14">
            <div className="absolute left-2 md:left-[20px] w-[95%] flex justify-between py-5">
              <Button text={infoIsOpen ? <FontAwesomeIcon icon={faXmark} className="font-light" /> : "Info" } padding={infoIsOpen ? "px-[14px]" : "px-[20px]" } bg={selectedProject.color} onClick={openInfoHandler}/>
              <div className="flex">
                <Button text="Visit website" padding="px-[20px]" icon={faArrowUpRightFromSquare} bg={selectedProject.color} onClick={() => externalLinkHandler(selectedProject.url)}/>
                { selectedProject.github && (<div className={`ml-2 h-[38px] w-[38px] flex justify-center items-center ${selectedProject.color} text-[21px] rounded-full cursor-pointer button-transition`}><FontAwesomeIcon icon={faGithub} onClick={() => externalLinkHandler(selectedProject.github)} /></div>)}
              </div>
            </div>
            <InfoWindow project={selectedProject} visibility={infoClassName} />
            <Screenshots key={projectId} images={selectedProject.images}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
