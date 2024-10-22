import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between pt-8 px-16 bg-slate-500'>
      <div>
        <h1 className='font-bold text-xl'>Our Locations</h1>
        <p>Maharashtra</p>
        <p>Gujrat</p>
        <p>Tamil Nadu</p>
        <p>Haryana</p>
        <p>Punjab</p>
        

      </div>

      <div>
        <h1 className='font-bold  text-xl'>Quick Links</h1>
        <div className='flex flex-col'>
          
          
          <a href="#Blockchain">Blockchain</a>
          <a href="#Nutrients">Nutrients</a>
          <a href="#Setup">Setup</a>
        </div>
        

      </div>

      <div>
      <h1 className='font-bold  text-xl'>Contact Us</h1>
        
        
        <p>hydroharvesters@gmail.com</p>
        <p>+91-8968817565</p>
      </div>

      <div>
      <h1 className='font-bold  text-xl'>Our Services</h1>
        <p>Fast Delivey</p>
        <p>Easy Payments</p>
        <p>Easy Acess</p>
        <p>24x7 Service</p>

      </div>
    </div>
  )
}

export default Footer
