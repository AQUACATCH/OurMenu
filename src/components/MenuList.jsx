import React from 'react'
import { useState } from 'react'
import { foods } from '../data.js'
import { useEffect } from 'react'
import { MyModal } from './MyModal.jsx'

export const MenuList = ({selectedCateg}) => {
  const [menu, setmenu] = useState(foods)
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFood, setselectedFood] = useState(null)
  console.log(selectedCateg)
  useEffect(() => {
    setmenu(()=> selectedCateg =='all'? foods : foods.filter(({category}) => category==selectedCateg))
  }, [selectedCateg])
  const toggle = (title, img) => {
    setIsOpen(true)
    /* console.log(title) */
    setselectedFood({title, img})
  }
  
    return (
    <div className='flex flex-row flex-wrap gap-3 justify-center p-5'>
      {menu.map(({id, title, category, price, img, desc})=>
        <div key={id} className='flex flex-col brp500:flex-row gap-4 basis-full  brp900:basis-[calc(50%-20px)]'>
            <div className='flex-1'>
                <img onClick={()=> toggle(title, img)} className='border-5 border-white rounded w-full h-48 object-cover' src={'images/'+img} alt="title" />
            </div>
            <div className='flex flex-col flex-1'>
                <div className='flex text-yellow-400 border-b-1 border-yellow-400 justify-between font-bold text-xl'>
                    <h2 className='capitalize'>{title}</h2>
                    <h2>€{price}</h2>
                </div>
                <div>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )}
    {isOpen  && <MyModal selectedFood={selectedFood} isOpen={isOpen} setIsOpen={setIsOpen}/>}
    </div>
  )
}
