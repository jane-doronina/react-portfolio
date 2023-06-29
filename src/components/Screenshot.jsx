
const Screenshot = ({image, active}) => {
  const { img, type } = image

  return (
    <img
      src={img}
      className={`object-contain rounded-xl ${ type === "desktop" ? "border-8 border border-darkGrey" : ""} ${active ? "" : "opacity-50"} animate-image`}
      />
  )
}

export default Screenshot
