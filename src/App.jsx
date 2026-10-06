import { useState } from 'react'
import './App.css'
import { MenuList } from './components/MenuList'
import { MyHeader } from './components/MyHeader'
import { Categories } from './components/Categories'

export default function App() {
  const [selectedCateg, setSelectedCateg] = useState('all')
  return (
      <div className='bg-gray-900 text-white min-h-screen' >
        <MyHeader>
          <Categories selectedCateg={selectedCateg} setSelectedCateg={setSelectedCateg}/>
        </MyHeader>
        <main className='max-w-[1200px] mx-auto'>
          <MenuList selectedCateg={selectedCateg} />
        </main>
      </div>
  )
}