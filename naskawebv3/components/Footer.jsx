import react from "react";
import Image from "next/image";
import Logo from "../public/images/logofooter.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-scroll'

// sm:bg-red-500 md:bg-green-600 lg:bg-yellow-700 xl:bg-purple-100
// bg-[#E9E9E9]
function Footer() {
  return (
    <div className="bg-[#E9E9E9] w-auto h-auto  flex md:flex-row flex-col justify-around items-start p-20 lg:pt-15 lg:pb-10 md:pb-10 lg:pl-10">
      <div className="">
          <div className="ml-0 md:-ml-4 lg:block ">
            <Image src={Logo} />
          </div>
      </div>
      <div className="ml-7 mt-3 mb-0  md:pt-4  md:ml-2  lg:-ml-12 xl:-ml-40 ">
        <ul >
          {/* <p className='text-gray-800 font-bold text-2xl pb-4'>Product</p> */}
          <Link href='/'  spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
          <li className="text-gray-500 text-md pb-2 -ml-2.5 font-semibold hover:text-[#207ABF] cursor-pointer">
            Home
          </li>
          </Link>
          <Link to="service"  spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
          <li className="text-gray-500 text-md pb-2 -ml-2.5 font-semibold hover:text-[#207ABF] cursor-pointer">
            Feature
          </li>
          </Link>
          <Link to='product'  spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
          <li className="text-gray-500 text-md pb-2 -ml-2.5 font-semibold hover:text-[#207ABF] cursor-pointer">
            Product
          </li>
          </Link>
          <li className="text-gray-500 text-md pb-2 -ml-2.5 font-semibold hover:text-[#207ABF] cursor-pointer">
            Training
          </li>
          <Link to='contact'   spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
          <li className="text-gray-500 text-md pb-2 -ml-2.5 font-semibold hover:text-[#207ABF] cursor-pointer">
            Collaborate
          </li>
          </Link>
        </ul>
      </div>
      <div className="ml-7 mt-5 md:ml-36">
        <ul>
          <p className='text-[#207ABF] font-bold text-xl mb-2 -ml-4'>Contact Us</p>
          <li className="text-[#4D4D4D] -ml-4 text-lg pb-1 font-bold cursor-pointer">
          +(62) 811 8011 558
          </li>
          <li className="text-gray-500 text-base pb-2 -ml-4 font-semibold cursor-pointer">
          info@naska.id
          </li>
          <p className='text-[#207ABF] font-bold text-xl mb-2 -ml-4 mt-4'>PT Naska Jala Dewa</p>
          <li className="text-gray-500 text-md pb-1 -ml-4 font-semibold cursor-pointer">
          © copyright 2022, All Rights Reserved.
          </li>
        </ul>
        <div className="flex gap-6 pb-5 lg:ml-3 ml-3">
            {/*Section for icons */}
            <FaFacebook className="md:mx-0 mx-1 lg:mx-1 text-2xl cursor-pointer hover:text-[#143FAB]" />
            <FaTwitter className="md:mx-0 mx-1 lg:mx-1 text-2xl cursor-pointer hover:text-[#207ABF]" />
            <FaYoutube className="md:mx-0 mx-1 lg:mx-1 text-2xl cursor-pointer hover:text-[#D63C3B]" />
            <FaInstagram className="md:mx-0 mx-1 lg:mx-1 text-2xl cursor-pointer hover:text-[#B4329B]" />
          </div>
      </div>
    </div>
  );
}

export default Footer;
