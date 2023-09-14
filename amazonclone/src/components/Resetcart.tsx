import { resetcart } from '@/pages/store/NextSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

const Resetcart = () => {
    const dispatch =useDispatch()
    const handleresetcart=()=>{
        const confirmreset= window.confirm("Are You Sure To Reset Your item from the cart ?")

        if(confirmreset){
            dispatch(resetcart())
        }
    }
  return (
    <button onClick={handleresetcart} className='bg-red-700 w-32 h-10 font-semibold rounded-lg text-white hover:bg-red-400 mt-4'>Reset Cart</button>
  )
}

export default Resetcart