import React from 'react'
import Image from "next/image";
import Passion from "../public/images/partner/passion.png"
import Linepass from "../public/images/partner/linepass.png"
import Linepart from "../public/images/partner/linepart.png"
import Lineduc from "../public/images/partner/lineduc.png"
import passion2 from "../public/images/partner/testpas.png"
import partime from "../public/images/partner/partners.png"
import integrity from "../public/images/partner/integrity.png"
import educate from "../public/images/partner/educate.png"
import LineYel from "../public/images/partner/linekuning.png"
import LineBlue from "../public/images/partner/linebiru.png"
import LineGrey from "../public/images/partner/lineabu.png"
import LineGreen from "../public/images/partner/lineijo.png"
const PartnerRemake = () => {
  return (
    <div id='partner' className="bg-white-100">
    <h1 className="text-center text-3xl mb-4 md:text-3xl lg:text-4xl lg:mt-24 text-[#234561]">Why Partner Us?</h1>
    <div className="text-center mb-4 mx-2 md:text-xl md:mx-5 lg:pb-6 text-md sm:text-xl">We are committed to our Core Values: <span className="font-semibold">Passion, Integrity, Educate, and Long Term Partnership.</span></div>

    <div className="grid grid-cols-1 mx-3 md:grid md:grid-cols-4 md:gap-x-2 md:-gap-y-6 md:pl-14 md:pr-14 lg:pl-48 lg:pr-48">

    <div className="hidden md:block "><Image src={passion2}/></div>
    {/* Mobile */}
    <div className="bg-[#2F5597] h-96 mb-3 md:hidden">
        <div className="my-24 mx-4 text-[#F8FCFF] font-body md:hidden ">
        <h1 className="mb-5 ">Passion</h1>
        <div className="-mt-2 mb-2">
        <Image classname="" src={Linepass}/>
        </div>
        <p className="text-xl md:mt-10"> Passionate dedicated in delighting our customers by delivering high quality products and services.</p>
        </div>
    </div>
    <div className="bg-[#FFC000] h-96 mb-3 md:hidden">
        <div className="font-body my-16 mx-4">
        <h1 className="mb-5">Partners</h1>
        <div className="-mt-2 mb-2">
            <Image src={Linepart}/>
        </div>
        <p className="text-xl">We are always present for our clients as a trusted Partner (Friend) and we always help our clients with the right strategies so that they have long-term growth benefits for the client's business. </p>
        </div>
    </div>
    <div className="bg-[#70AD47] h-96 mb-3 md:hidden">
        <div className="font-body my-24 mx-4 text-[#F8FCFF]">
        <h1 className="mb-5" >Integrity</h1>
        <div className=" -mt-2 mb-2">
            <Image src={Linepass} />
        </div>
        <p className="text-xl ">Bring our commitment and value to effective partnership and trusted.</p>
        </div>
    </div>
    <div className="hidden md:block lg:max-w-md">
        <h1 className="text-[#507CCA] md:text-2xl md:pl-2 md:-mb-3 md:mt-3 lg:text-4xl lg:mt-4 lg:ml-2">Passion</h1>
        <div className=" md:ml-2 lg:mt-4 lg:mb-4 lg:ml-4 md:mt-3">
            <Image src={LineBlue}/>
        </div>
        <p className="md:text-xs md:mx-2 md:mr-3 lg:text-xl lg:ml-4 md:mt-3 ">Passionate and dedicated in delighting our customers by delivering high quality products and services.</p>
    </div>
    <div className="bg-[#A5A5A5] h-96 mb-5 md:hidden">
        <div className="font-body my-24 mx-4 text-[#1F1D1D]">
        <h1 className="mb-5" >Educate</h1>
        <div className="-mt-2 mb-2">
            <Image src={Lineduc}/>
        </div>
        <p className="text-xl ">Able to understand deeply the problems they are facing and they are able to understand the strong reasons why they made these decisions.</p>
        </div>
    </div> 
    <div className="hidden md:block "><Image src={partime} height={800} width={800}/></div>
    <div className="hidden md:block">
        <h1 className="text-[#FFC000] md:text-2xl md:pl-2 md:-mb-3 md:mt-3 lg:text-4xl lg:mt-4 lg:ml-2">Partner</h1>
        <div className="md:mt-2 md:mb-2 md:ml-2 lg:mt-2 lg:ml-4">
            <Image src={LineYel}/>
        </div>
        <p className="md:text-xs md:mx-2 md:mr-3 lg:text-xl lg:ml-4 ">We are always present for our clients as a trusted Partner (Friend) and we always help our clients with the right strategies so that they have long-term growth benefits for the client's business. </p>
    </div>
    <div className="hidden md:block">
        <h1 className="text-[#70AD47] md:text-2xl md:mt-5 md:pl-2 md:-mb-3  lg:text-4xl lg:mt-4 lg:ml-2">Integrity</h1>
        <div className="md:ml-2 lg:mt-2 lg:ml-4  md:mt-4">
            <Image src={LineGreen}/>
        </div>
        <p className="md:text-xs md:mx-2 md:mr-3 lg:text-xl lg:ml-4 md:mt-2">Bring our commitment and value to effective partnership and trusted.</p>
    </div>
    <div className="hidden md:block">
        <Image src={integrity}/>
    </div>
    <div className="hidden md:block">
        <h1 className="text-[#A5A5A5] md:text-2xl md:pl-2 md:-mb-3 md:mt-5 lg:text-4xl lg:mt-4 lg:ml-2">Educate</h1>
        <div className="md:mt-4 md:mb-2 md:ml-2 lg:mt-2 lg:ml-4  ">
            <Image src={LineGrey}/>
        </div>
        <p className="md:text-xs md:mx-2 md:mr-3 lg:text-xl lg:ml-4">Able to understand deeply the problems they are facing and they are able to understand the strong reasons why they made these decisions.
        </p>
    </div>
    <div className="hidden md:block">
        <Image src={educate}/>
    </div>
    </div>

    
</div>
  )
}

export default PartnerRemake