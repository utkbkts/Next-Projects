import { NavContext } from '@/context/NavContext'
import React, { useContext } from 'react'

const Menubtn = () => {
  const {Open,setOpen}=useContext(NavContext)
  const handleclick = (e) => {
    e.preventDefault();
    setOpen(!Open);

    if (!Open) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }
  };
  return (
    <div onClick={handleclick} className='group flex flex-col gap-y-2 cursor-pointer xl:hidden group items-end'>
        <div className='w-7 h-[2px] bg-white transition-all'></div>
        <div className='w-4 group:hover:w-7 h-[2px] bg-white'></div>
        <div className='w-7 h-[2px] bg-white transition-all'></div>
    </div>
  )
}

export default Menubtn