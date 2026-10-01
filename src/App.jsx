import { useState } from 'react'
import './App.css'
import { MenuList } from './components/MenuList'

export default function App() {
  return (
    <>
      <div className='bg-gray-900 text-white' >
        <header className='shadow-3xl p-6 bg-gray-900'>
          <h1 className='text-center text-yellow-400 font-bold text-2xl'>Our Menu</h1>
        </header>
        <main className='max-w-[1200px] mx-auto'>
          <MenuList />
        </main>
      </div>
    </>
  )
}