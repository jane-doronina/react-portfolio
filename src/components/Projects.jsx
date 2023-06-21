import MenuItem from "./MenuItem"

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-lightGrey h-[100vh]">
      <div className="container mt-[50px]">
        <h2 className="text-7xl text-white uppercase font-bold relative bottom-[-15px] z-[0] ml-5">Latest projects</h2>
        <div className="bg-white rounded-3xl w-[100%] h-[80vh] z-[1] relative">
          <div className="w-[30%] h-[100%] rounded-l-3xl bg-darkGrey py-10 px-3">
            <MenuItem name="Remost" type="Full-Stack Rails App"/>
            <MenuItem name="Obscure Furniture" type="Full-Stack Rails App"/>
            <MenuItem name="Mclub Online-Shop" type="React/Redux App"/>
            <MenuItem name="Movies Watchlist" type="Full-Stack Rails App"/>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  )
}

export default Projects
