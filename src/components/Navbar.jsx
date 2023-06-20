import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
  return (
    <nav className="bg-white py-6">
      <div className='container flex justify-between items-center'>
        <h3 className='font-jost font-bold text-lg'>Jane Doronina</h3>
        <div className="flex w-[30%] justify-between">
          <ul className='list-none flex justify-end items-center'>
            <li className='mr-6'>Projects</li>
            <li>About</li>
          </ul>
          <div>
            <FontAwesomeIcon icon={faEnvelope} className='mr-5' />
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
