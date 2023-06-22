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

  return (
    <div className="w-[70%] relative">
      <div id="screenshots-section" className="p-16 h-[100%] mx-auto overflow-y-auto screenshots" onScroll={handleScroll}>
        {images.map((image, i) => <Image key={i} src={image} />)}
      </div>
      {downArrow ?
        <FontAwesomeIcon
          icon={faArrowDown}
          className="absolute right-[20px] bottom-[20px] text-[22px] animate-bounce"
        /> : <FontAwesomeIcon
          icon={faArrowUp}
          className="absolute right-[20px] bottom-[20px] text-[22px] animate-bounce"
        />}
    </div>
  )
}

export default Screenshots
