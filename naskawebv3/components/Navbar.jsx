
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../public/images/headerlogo.png";
import { Link as Link } from 'react-scroll'
import {AiOutlineInfoCircle, AiOutlineClose , AiOutlineMenu ,AiOutlineInstagram, AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'

const Navbar = () => {

    const [nav,setNav] = useState(false)
    const [shadow,setShadow] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() =>{
        const handleShadow = () => {
            if(window.scrollY >= 90){
                setShadow(true)
            }else{
                setShadow(false)
            }
        }
        window.addEventListener('scroll',handleShadow);
    },[]);
  return (
    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20  z-[100] '}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-[#f0f9ff]'>
            <Link to="/"  
              smooth={true}
              offset={-100}
              duration={500}>
            <Image src={logo} alt="/" width='270' />
            </Link>
            <div>
                <ul className='hidden md:flex'>
                    <Link to='mainsec'  
              smooth={true}
              offset={-100}
              duration={500}>
                        <li className='ml-10 text-sm uppercase hover:border-b font-body '>Home</li>
                    </Link>
                    <Link to="service"  
              smooth={true}
              offset={-100}
              duration={500}>
                        <li className='ml-10 text-sm uppercase hover:border-b font-body'>Feature</li>
                    </Link>
                    <Link to='product'  
              smooth={true}
              offset={-100}
              duration={500}>
                        <li className='ml-10 text-sm uppercase hover:border-b font-body'>Product</li>
                    </Link>
                    <Link to='contact'   
              smooth={true}
              offset={-100}
              duration={500}>
                        <li className='ml-10 text-sm uppercase hover:border-b font-body'>Contact</li>
                    </Link>
                    {/* <Link to='/table'  
              smooth={true}
              offset={-100}
              duration={500}>


                        <li className='ml-10 text-sm uppercase hover:border-b font-body'>Training</li>
                    </Link> */}
                </ul>
                <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
        </div>

        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
            <div className={nav ? '  fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#f0f9ff] p-10 ease-in duration-500' 
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                 <div>
                    <div className='flex w-full items-center justify-between'>
                        <Link to="mainsec"  
              smooth={true}
              offset={-100}
              duration={500}>
                    <Image src={logo} alt="/" width='200' height='100'/>
                        </Link>
                    <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                        <AiOutlineClose/>
                    </div> 
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        {/* <p className='w-[85%] md:w-[90%] py-4  '></p> */}
                    </div>
                 </div>
                 <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link to='/' 
              smooth={true}
              offset={-100}
              duration={500}>
                            <li onClick={()=> setNav(false)} className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link to='service' 
              smooth={true}
              offset={-100}
              duration={500}>
                            <li onClick={()=> setNav(false)} className='py-4 text-sm'>Feature</li>
                            </Link>
                            <Link to='product' 
              smooth={true}
              offset={-100}
              duration={500}>
                            <li onClick={()=> setNav(false)} className='py-4 text-sm'>Product</li>
                            </Link>
                            <Link to='contact' 
              smooth={true}
              offset={-100}
              duration={500}>
                            <li onClick={()=> setNav(false)} className='py-4 text-sm'>Contact</li>
                            </Link>
                            <Link to='/table' 
              smooth={true}
              offset={-100}
              duration={500}>
                            <li onClick={()=> setNav(false)} className='py-4 text-sm'>Training</li>
                            </Link>
                    </ul>
                    <div className='pt-40'>
                        <p className='uppercase tracking-widest text-[#234561] font-bold'>Let's Connect</p>
                    <div className='flex items-center justify-between  my-4 w-full sm:w-[80%]'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <BsWhatsapp/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <AiOutlineInstagram/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <AiOutlineMail/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <AiOutlineInfoCircle/>
                        </div>
                    </div>
                    </div>
                 </div>
                 </div>
        </div>
    </div>
  )
}

export default Navbar