import { Link } from 'react-router-dom';
import { useState } from "react"

const MenuItem = ({project, selected}) => {
  const { id, name, type } = project;

  return (
    <Link to={`/projects/${id}`} className={`${selected ? "bg-mediumDarkGrey" : ""} flex flex-col md:flex-row justify-center md:justify-between items-center md:mb-6 md:pl-[20px] md:pr-[5px] md:py-[5px] rounded-3xl md:rounded-full hover:bg-mediumDarkGrey group`}>
      <h3 className={`text-white text-[18px] ${selected ? "border-0" : "md:border-b-[1px] md:border-b-grey"} w-auto group-hover:border-0`}>{name}</h3>
      <div className="rounded-full bg-grey font-light text-sm px-[12px] py-[6px] h-auto">
        <p className="mb-0 text-lightGrey">{type}</p>
      </div>
    </Link>
  )
}

export default MenuItem
