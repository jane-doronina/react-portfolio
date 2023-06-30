const InfoWindow = ({project, visible}) => {
  const { techStack, description } = project;
  return (
    <div className={`rounded-3xl w-[100%] md:w-[70%] bg-darkGrey text-white p-10 absolute top-[70px] left-0 md:left-[20px] z-[5] ${visible ? "block" : "hidden"} font-light`}>
      <p><span className="font-bold">Technologies used:</span> {techStack}</p>
      <p className="mt-4">{description}</p>
    </div>
  )
}

export default InfoWindow
