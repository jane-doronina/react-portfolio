import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'

export const FrontCard = ({topic}) => {
  return (
    <div className="w-[100%] h-[100%] flex justify-center items-center text-white text-center bg-darkGrey rounded-xl relative p-8">
      <p className="absolute top-[15px] left-[15px] px-2 rounded-full uppercase text-[12px] border-[1px] border-white">Me & Work</p>
      <p>{topic}</p>
      <FontAwesomeIcon icon={faCircleArrowRight} className='text-[20px] absolute bottom-[15px] right-[15px]' />
    </div>
  )
}

export const BackCard = ({question}) => {
  return (
    <div className="w-[100%] h-[100%] flex flex-col justify-start items-center text-white text-center bg-darkGrey rounded-xl relative p-6">
      <p className="px-2 uppercase text-[12px] mb-2">{question.topic}</p>
      <p className='text-[14px] font-light'>{question.answer}</p>
      <FontAwesomeIcon icon={faCircleArrowRight} className='text-[20px] absolute bottom-[15px] right-[15px]' />
    </div>
  )
}
