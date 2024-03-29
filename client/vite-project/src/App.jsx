import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import CreatePost from './Pages/CreatePost'
import logo from './assets/open-ai-seeklogo.svg'

const App = () => {
  return (
   <BrowserRouter>
    <header className='w-full flex justify-between items-centerbg-white sm:px-8 py-4 border-b border-b-[#e6ebf4]'>
      <Link to="/">
        <img src={logo} alt="logo" className='w-28 object-contain'/>
      </Link>
      <Link to="/create-post" className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>Create</Link>
    </header>
    <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/create-post' element={<CreatePost/>} />

      </Routes>
    </main>
   </BrowserRouter>
  )
}

export default App