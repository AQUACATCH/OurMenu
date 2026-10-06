import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const TimeSpent = () => {
    const [TimeSpent, setTimeSpent] = useState(0)
    useEffect(() => {
      const timer = setTimeout(()=>setTimeSpent(prev=> prev+1),1000)
    
      return () => clearTimeout(timer)
    }, [TimeSpent])
    
  return (
    <div className='absolute right-6 text-yellow-400 size-[3rem] flex items-center justify-center border border-yellow-400 rounded-full'>{TimeSpent}s</div>
  )
}