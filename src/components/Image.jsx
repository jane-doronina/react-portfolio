import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

const Image = ({src}) => {

  // const [animate, setAnimate] = useState(false);
  // const location = useLocation();

  // useEffect(() => {
  //   setAnimate(true);
  //   const timer = setTimeout(() => {
  //     setAnimate(false);
  //   }, 100);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [location.pathname]);

  return (
  <img src={src} className={`w-[100%] object-cover rounded-xl border-8 border border-gray-700 mb-[50px] first:mt-20 animate-image`}/>
  )
}

export default Image
