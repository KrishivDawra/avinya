import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Header = () => {
  let [modelstatus,setModelstatus] = useState(false)
  return (
    <>
    <div className={`modeloverlay ${modelstatus?'modelshow':''}`} onClick={()=> setModelstatus(false)}></div>
    <div className={`modeldiv ${modelstatus?'showmodeldiv':''} `}>
      <div className='fixed right-3 z-500 top-2'>
      <span className='cursor-pointer p-1' onClick={()=> setModelstatus(false)}>&times;</span>
      </div>
      <div className='container relative mt-8 '>
        <h1 className='font-serif subpixel-antialiased tracking-wide line-clamp-1 text-center text-2xl '> Login</h1>
        <div className='m-2'>
        <form action="/" method='post'>
          <div>
          <input type="text" className=" rounded w-full my-3 h-10 border-slate-900/400 border-2" name="uname" id="name" placeholder="Username" required=""/>
          </div>

         
          <div>
                    <input className='w-full h-10 w-full border-slate-900/400 border-2 rounded mb-3' type="password"  name="psw" placeholder="Password" required=""/>
          </div>
          
                           
          
          <div className='mt-2 text-center'>
                <button className='bg-green-300  mr-auto rounded p-2'>Submit</button>
          </div>
         
        </form>
        </div>
      </div>
      
    </div>
    <div className='flex justify-between bg-green-400 align-baseline'>
      <img className='h-[90px] w-[110px] rounded-full size-48 ' src=".\src\assets\logo123-removebg-preview.png" alt="" />
        <ul className='lg:flex lg:space-x-4 lg:py-8 lg:text-black hidden'>
            <li className='font-serif font-semibold  hover:text-black'><Link to = {'/'}> Home</Link></li>
            <li className='font-serif font-semibold  hover:text-black'><Link to={'/store'}>Products</Link></li>
            <li className='font-serif font-semibold  hover:text-black'><Link to={'/consult'}>consultencies</Link></li>
            <li className='font-serif font-semibold  hover:text-black'><Link to={'/About-us'}> About Us</Link></li>
        </ul>
        <div className='py-5'>
            <a className='pr-2 cursor-pointer ' onClick={()=> setModelstatus(true)}>Login </a>
            <button className='bg-gradient-to-r from-orange-400 to-red-500 px-4 py-2 rounded-xl '>Join Us</button>
        </div>
    </div>
    </>
  )
}

export default Header

