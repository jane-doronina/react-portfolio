import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="bg-white pt-14">
      <div className="container px-6 md:px-0 py-6 flex justify-between items-end md:items-start md:border-t-2 md:border-t-lightGrey">
        <p>Copyright © 2023 <span className="font-bold">Zhanna Doronina</span>. <span className="block md:inline">Coded with 🖤 and React JS.</span></p>
        <div>
          <a href="mailto:doronina.jane.work@gmail.com" className="icon-link">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2 md:mr-5 icon" />
          </a>
          <a href="https://www.linkedin.com/in/zhanna-doronina" target="_blank" className="icon-link" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} className="icon"/>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
