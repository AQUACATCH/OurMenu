import { motion, spring } from 'motion/react'
import React from 'react'
import { TimeSpent } from './TimeSpent'

export const MyHeader = ({children}) => {
    return (
        <header className='shadow-2xl p-6 bg-gray-900 flex flex-col items-center'>
            <div className='flex w-[calc(100vw-20px)] items-center justify-center relative'><motion.h1 initial={{y:'-10vw'}} animate={{y:0 ,transition:{duration: 1, type: spring, stiffness: 20}}} className='text-center text-yellow-400 font-bold text-3xl'>Our Menu </motion.h1><TimeSpent/></div>
            {children}
        </header>
    )
}

