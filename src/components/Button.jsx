import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = ({text, onClick, padding, icon}) => {
  return (
    <button className={`py-[7px] ${padding} rounded-full bg-darkGrey text-white font-light button-transition`} onClick={onClick}>
    {text}
    { icon && <FontAwesomeIcon icon={icon} className='ml-2 text-[12px]' />}
    </button>
  )
}

export default Button
