import { gallery } from '../constants';

const Gallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-[100%] md:w-[70%] h-[500px] md:h-[100%] overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none p-4 bg-darkGrey">
      <div className="gallery-column-1">
        {gallery.slice(0,3).map((image, i) => {
          return <img key={i} src={image} className="w-[100%] object-cover mb-3" />
        })}
        {gallery.slice(0,3).map((image, i) => {
          return <img key={i} src={image} className="w-[100%] object-cover mb-3" />
        })}
      </div>
      <div className="gallery-column-2">
        {gallery.slice(3,6).map((image, i) => {
          return <img key={i} src={image} className="w-[100%] object-cover mb-3" />
        })}
        {gallery.slice(3,6).map((image, i) => {
          return <img key={i} src={image} className="w-[100%] object-cover mb-3" />
        })}
      </div>
      <div className="gallery-column-1">
        {gallery.slice(7,9).map((image, i) => {
          return <img key={i} src={image} className="w-[100%] object-cover mb-3" />
        })}
        {gallery.slice(7,9).map((image, i) => {
          return <img key={i} src={image} className="w-[100%] object-cover mb-3" />
        })}
      </div>
    </div>
  )
}

export default Gallery
