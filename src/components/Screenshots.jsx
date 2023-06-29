import Screenshot from "./Screenshot";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Screenshots = ({ images }) => {
  const [rightArrowVisible, setRightArrowVisible] = useState(true);
  const [leftArrowVisible, setLeftArrowVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [imagePreloaded, setImagePreloaded] = useState(false);

  useEffect(() => {
    const preloadedImages = images.map((imageObj) => {
      const image = new Image();
      image.src = imageObj.img;
      return image;
    });

    Promise.all(preloadedImages.map((image) => image.decode()))
      .then(() => {
        setImagePreloaded(true);
      })
      .catch((error) => {
        console.error("Error preloading images:", error);
      });
  }, [images]);

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
        {imagePreloaded && (
          <Screenshot
            image={images[currentImage]}
            active={true}
            preloadImages={images}
          />
        )}
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
