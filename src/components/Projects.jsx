import { useState } from "react";
import { useParams } from "react-router-dom";
import MenuItem from "./MenuItem";
import Button from "./Button";
import InfoWindow from "./InfoWindow";
import Screenshots from "./Screenshots";
import { projects } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  const [infoIsOpen, setInfoIsOpen] = useState(false);
  const { projectId } = useParams();
  const selectedProject = projectId
    ? projects.find((p) => p.id === projectId)
    : projects[0];

  const openInfoHandler = () => {
    setInfoIsOpen((prevInfoIsOpen) => !prevInfoIsOpen);
  };

  const externalLinkHandler = (link) => {
    window.open(link);
  };

  return (
    <section
      id="projects"
      className="w-full bg-lightGrey mt-[100px] md:mt-0 z-[1] px-6 md:px-10"
    >
      <div className="container mt-0 md:mt-[50px]">
        <h2 className="text-5xl md:text-7xl text-white uppercase font-bold relative bottom-[-15px] z-[0] ml-5">
          Latest projects
        </h2>
        <div className="bg-white rounded-3xl w-[100%] md:h-auto md:min-h-[650px] z-[1] relative flex flex-col-reverse md:flex-row">
          <div className="w-[100%] md:w-[30%] h-[40vh] md:h-auto grid grid-cols-2 md:block rounded-b-3xl md:rounded-l-3xl md:rounded-br-none bg-darkGrey md:py-10 md:px-3">
            {projects.map((project) => (
              <MenuItem
                key={project.id}
                project={project}
                selected={project === selectedProject}
              />
            ))}
          </div>
          <div className="w-[100%] md:w-[70%] md:h-[100%] flex flex-col min-h-[345px] relative px-2 md:px-14">
            <div className="w-[100%] flex justify-between py-3 md:py-5">
              <Button
                text={
                  infoIsOpen ? (
                    <FontAwesomeIcon icon={faXmark} className="font-light" />
                  ) : (
                    "Info"
                  )
                }
                padding={infoIsOpen ? "px-[14px]" : "px-[20px]"}
                bg={selectedProject.color}
                onClick={openInfoHandler}
              />
              <div className="flex">
                <Button
                  text="Visit website"
                  padding="px-[20px]"
                  icon={faArrowUpRightFromSquare}
                  bg={selectedProject.color}
                  onClick={() => externalLinkHandler(selectedProject.url)}
                />
                {selectedProject.github && (
                  <div
                    className={`ml-2 h-[38px] w-[38px] flex justify-center items-center ${selectedProject.color} text-[21px] rounded-full cursor-pointer button-transition`}
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      onClick={() =>
                        externalLinkHandler(selectedProject.github)
                      }
                    />
                  </div>
                )}
              </div>
            </div>
            <InfoWindow project={selectedProject} visible={infoIsOpen} />
            <div className="flex-grow flex items-center justify-center">
              <Screenshots key={projectId} images={selectedProject.images} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
