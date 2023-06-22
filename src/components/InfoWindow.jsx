const InfoWindow = ({techStack, description, visibility}) => {
  return (
    <div className={`rounded-3xl w-[70%] bg-darkGrey text-white p-10 absolute top-[70px] left-[20px] z-[5] ${visibility} font-light`}>
      <p><span className="font-bold">Technologies used:</span> {techStack}</p>
      <p className="mt-4">{description}</p>
    </div>
  )
}

export default InfoWindow
