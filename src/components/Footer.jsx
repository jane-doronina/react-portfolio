import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="bg-white py-3">
      <div className="container py-6 flex justify-between border-t-2 border-t-lightGrey">
        <p>Copyright © 2023 <span className="font-bold">Zhanna Doronina</span>. Coded with 🖤 and React JS.</p>
        <div>
          <a href="mailto:doronina.jane.work@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="mr-5" />
          </a>
          <a href="https://www.linkedin.com/in/zhanna-doronina" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
