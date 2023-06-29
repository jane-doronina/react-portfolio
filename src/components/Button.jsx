import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = ({text, onClick, padding, icon, bg}) => {
  return (
    <button className={`py-[7px] ${padding} rounded-full ${bg} font-light cursor-pointer button-transition`} onClick={onClick}>
    {text}
    { icon && <FontAwesomeIcon icon={icon} className='ml-2 text-[12px]' />}
    </button>
  )
}

export default Button
