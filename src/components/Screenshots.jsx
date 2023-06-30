import Screenshot from "./Screenshot";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Screenshots = ({ images }) => {
  const [rightArrowVisible, setRightArrowVisible] = useState(true);
  const [leftArrowVisible, setLeftArrowVisible] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);

  const goToNextImage = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    }
    const element = document.getElementById("screenshots-section")
    element.scrollLeft += element.clientWidth
  };

  useEffect(() => {
    if (currentImage === images.length - 1) {
      setRightArrowVisible(false);
    } else if (currentImage < images.length - 1) {
      setRightArrowVisible(true);
    }
    if (currentImage === 0) {
      setLeftArrowVisible(false);
    } else if (currentImage > 0) {
      setLeftArrowVisible(true);
    }
  }, [currentImage, images]);

  const goToPreviousImage = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
    const element = document.getElementById("screenshots-section")
    element.scrollLeft -= element.clientWidth
  };

  return (
    <>
      <div
        id="screenshots-section"
        className="w-[100%] h-[100%] md:h-[100%] pb-12 md:grow md:mt-4 md:mt-0 mx-auto flex items-center overflow-hidden scroll-smooth screenshots px-0"
      >
      {images.map((image, index) => (
        <Screenshot key={index} image={image} active={index === currentImage} />
      ))}
        {rightArrowVisible && (
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            className="absolute bottom-4 md:top-[50%] right-4 text-[28px] z-[20]"
            onClick={goToNextImage}
          />
        )}
        {leftArrowVisible && (
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            className="absolute bottom-4 md:top-[50%] left-4 text-[28px] z-[20]"
            onClick={goToPreviousImage}
          />
        )}
      </div>
    </>
  );
};

export default Screenshots;
