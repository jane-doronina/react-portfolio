
const Image = ({image, active}) => {
  const { img, type } = image

  return (
    <img
          src={img}
          className={`object-contain rounded-xl ${ type === "desktop" ? "border-8 border border-darkGrey" : ""} animate-image`}
          />
  )
}

export default Image
