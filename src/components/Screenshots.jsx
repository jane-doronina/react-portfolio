import Screenshot from "./Screenshot";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Screenshots = ({ images }) => {
  const [rightArrowVisible, setRightArrowVisible] = useState(true);
  const [leftArrowVisible, setLeftArrowVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const goToNextImage = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    }
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
  };

  return (
    <>
      <div
        id="screenshots-section"
        className="h-[100%] w-[100%] mx-auto flex items-center screenshots px-0 md:px-8"
      >
        <Screenshot
          image={images[currentImage]}
          active={true}
          preloadImages={images}
        />
        {rightArrowVisible && (
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            className="absolute top-[50%] right-6 text-[28px]"
            onClick={goToNextImage}
          />
        )}
        {leftArrowVisible && (
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            className="absolute top-[50%] left-6 text-[28px] z-[20]"
            onClick={goToPreviousImage}
          />
        )}
      </div>
    </>
  );
};

export default Screenshots;
