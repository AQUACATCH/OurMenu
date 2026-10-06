import { Button } from '@heroui/react'
import { ButtonGroup } from '@heroui/react'
import React from 'react'
import { getAllCategories } from '../utils'
import { useState } from 'react'
import { motion } from "motion/react"

export const Categories = ({selectedCateg, setSelectedCateg}) => {
    const [categories, setCategories] = useState(getAllCategories)
    return (
        <div>
            <ButtonGroup className='text-white m-4'>
                {categories.map((category, index) => index == 0 ? <Button key={index} onClick={()=> setSelectedCateg(category)} className={selectedCateg == category ? 'bg-gray-800 capitalize' :'bg-yellow-400 capitalize'}><motion.span whileHover={{scale:1.1}}>{category}</motion.span></Button> : <Button key={index} onClick={()=> setSelectedCateg(category)} className={selectedCateg == category ? 'bg-gray-800 capitalize' :'bg-yellow-400 capitalize'}> <ButtonGroup.Separator /><motion.span whileHover={{scale:1.1}}>{category}</motion.span></Button>
                )}
            </ButtonGroup>
        </div>
    )
}
