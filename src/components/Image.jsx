import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

const Image = ({image}) => {
  const { img, type } = image
  return (
  <img src={img} className={`w-[100%] object-cover rounded-xl ${ type === "desktop" ? "border-8 border border-gray-700" : ""} mb-[50px] first:mt-20 animate-image`}/>
  )
}

export default Image
