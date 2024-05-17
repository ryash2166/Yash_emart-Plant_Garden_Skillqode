import React from 'react'
import Mail from '../Components/Mail'
import Footer_1 from '../Components/Footer_1'
import Navbar1 from '../Components/Navbar'
import { NavLink } from 'react-router-dom'
NavLink

const Checkout = () => {
  return (
    <div>
      {/* <Navbar1/> */}
      <div className=''>
        <section className='py-[180px] px-[15px]' style={{backgroundImage: 'linear-gradient(226.69deg, #E5F8FF8C 38.63%, #F9E0B014 82.88%)'}}>
            <div className='mx-[272px] max-2xl:mx-[50px] max-lg:mx-2'>
                <div>
                    <div className=''>
                        <p className='px-[20px] text-[16px] text-[#515151] py-[15px] mb-[35px] bg-[#fff] shadow-lg shadow-slate-100'>Your cart is currently empty.</p>
                        <p className='mb-[40px] hover:-translate-y-1 duration-300 ease-in-out'>
                            <NavLink to="/shopnow" className='border-[1px] px-[33px] py-[12px] text-white font-[Jost] text-[18px] bg-black'>Return to shop</NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <Mail/>
        <Footer_1/>
      </div>
    </div>
  )
}

export default Checkout
