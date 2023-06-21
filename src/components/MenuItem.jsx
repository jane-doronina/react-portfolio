const MenuItem = (props) => {
  return (
    <div className="flex justify-between items-center mb-6 pl-[20px] pr-[5px] py-[5px] rounded-full hover:bg-mediumDarkGrey group">
      <h3 className="text-white text-[18px] border-b-[1px] border-b-stone-500 w-auto group-hover:border-0">{props.name}</h3>
      <div className="rounded-full bg-grey font-light text-sm px-[12px] py-[6px] h-auto">
        <p className="mb-0 text-lightGrey">{props.type}</p>
      </div>
    </div>
  )
}

export default MenuItem
