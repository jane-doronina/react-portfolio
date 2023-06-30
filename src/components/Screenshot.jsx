
const Screenshot = ({image, active}) => {
  const { img, type } = image

  return (
    <img
      src={img}
      className={`rounded-xl ${ type === "desktop" ? "border-8 border border-darkGrey" : ""} ${active ? "" : "md:opacity-50"} mr-4 md:mr-0 animate-image`}
      />
  )
}

export default Screenshot
