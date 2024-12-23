import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Outlet></Outlet>
      <ToastContainer />
    </div>
  )
}

export default App
