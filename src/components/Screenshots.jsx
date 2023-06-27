import Image from "./Image";

import { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

const Screenshots = ({images}) => {
  const [downArrow, setDownArrow] = useState(true);
  const prevScrollY = useRef(0);

  const handleScroll = (event) => {
    const currentScrollY = event.target.scrollTop;
    const scrollPosition = event.target.scrollTop;
    const element = document.getElementById('screenshots-section');
    const contentHeight = element.scrollHeight;
    const containerHeight = element.clientHeight;
    const scrollableHeight = contentHeight - containerHeight;

    if (currentScrollY === 0 || (currentScrollY > prevScrollY.current && scrollPosition < scrollableHeight)) {
      console.log("scrolling down")
      setDownArrow(true);
    } else if (currentScrollY === scrollableHeight || currentScrollY < prevScrollY.current) {
      console.log("scrolling up")
      setDownArrow(false);
    }
    prevScrollY.current = currentScrollY;
  }

  const scrollToNextImage = (e) => {
    const container = e.currentTarget.parentElement;
    container.scrollBy(0, 360);
  }

  const scrollToPreviousImage = (e) => {
    const container = e.currentTarget.parentElement;
    container.scrollBy(0, -360);
  }

  return (
    <>
      <div id="screenshots-section" className="h-[100%] mx-auto scroll-snap-y mandatory overflow-y-scroll screenshots px-14" onScroll={handleScroll}>
        {images.map((image, i) => <Image key={i} image={image} />)}
        {downArrow ?
          <FontAwesomeIcon
            icon={faArrowDown}
            className="absolute right-[20px] bottom-[20px] text-[22px] animate-bounce" onClick={scrollToNextImage}
          /> : <FontAwesomeIcon
            icon={faArrowUp}
            className="absolute right-[20px] bottom-[20px] text-[22px] animate-bounce" onClick={scrollToPreviousImage}
          />}
      </div>
    </>
  )
}

export default Screenshots
