import React from "react";
import Image from "next/image";
import ErpIcon from "../public/images/icon/erp.png"
import WebApp from "../public/images/icon/webapp.png"
import MobileApp from "../public/images/icon/mobileapp.png"
import ManageService from "../public/images/icon/managedservice.png"
import CloudInfra from "../public/images/icon/cloud.png"
import ExpertAdv from "../public/images/icon/expertadvisory.png"
// import BgService from "../public/images/bgourservices.png"


const Services= () => {
    return(
        <div id="service" className="">
            {/* bg-[url('/images/bgservice.png')] */}
            <div className="bg-[url('/images/bgservice.png')] flex justify-center xl:-mb-10 bg-fixed bg-center bg-cover lg:h-fit " id="oursec">                
            <h1 className="absolute text-center text-[#234561] font-bold text-3xl mb-4 mt-12 md:text-3xl lg:text-4xl lg:mt-20 service-sec">Our Services</h1>
            {/* <div className="absolute text-center mt-24 mx-4">Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred format.</div> */}

                {/* <div className="absolute text-center text-3xl font-bold mt-10">
                    Our Services
                </div> */}
                
                <div className="grid grid-row-6 gap-14 pt-14 pb-14  lg:grid lg:grid-cols-3 lg:gap-1 xl:mb-10v lg:mb-36 lg:pl-24 lg:pr-24 lg:pb-32">
                

                    <div className="mt-32 ">
                        <div className="text-center  lg:mt-10  ">
                        <Image src={ErpIcon} className="mx-auto"/>
                        </div>
                        <div className="font-semibold text-center text-lg mt-2 md:text-2xl ">
                        Enterprise Software (ERP)
                        </div>
                        <div className="text-center mt-2 mx-14 md:mx-32 lg:mx-10 xl:mx-24 text-lg">
                        Every company is unique, required application based on specific business needs and these application must ready to deploy with minimum adjustment. Odoo is solution to achieve that vision. We custom Odoo effectively and efficiently with our years of experience to meet your needs.
                        </div>
                    </div>
                    <div>
                        <div className="text-center lg:mt-44 ">
                        <Image src={WebApp} className="mx-auto"/>
                        </div>
                        <div className="font-semibold text-center text-lg mt-2 md:text-2xl">
                        Web Application Development
                        </div>
                        <div className="text-center mt-2 mx-14 md:mx-32 lg:mx-10 xl:mx-24 text-lg">
                        As a modern approach to create efficient digital solutions, web applications today have become more interactive, engaging, and efficient. We develop web application on a wide range of open sources platform to ensure an effective budget management.
                        </div>
                    </div>
                    <div>
                        <div className="text-center lg:mt-44">
                        <Image src={MobileApp} className="mx-auto"/>
                        </div>
                        <div className="font-semibold text-center text-lg mt-2 md:text-2xl">
                        Mobile Application
                        </div>
                        <div className="text-center mt-2 mx-14 md:mx-32 lg:mx-10 xl:mx-24 text-lg">
                        Create your own robust, fast, and intuitive mobile application for both IOS and Android according to your business requirements
                         We deliver extraordinary mobile apps with beautiful user interface and intuitive user experience while reliable integrated with backend systems.
                        </div>
                    </div>
                    <div>
                        <div className="text-center lg:mt-20">
                        <Image src={ManageService} className="mx-auto"/>
                        </div>
                        <div className="font-semibold text-center text-lg mt-2 md:text-2xl">
                        Managed Service
                        </div>
                        <div className="text-center mt-2 mx-14 md:mx-32 lg:mx-10 xl:mx-24 text-lg">
                        Services are aimed to ensure that applications are highly available, reliable, and relevant to evolving business needs.
                        We offer a full range of services, including application management, enterprise resource planning, and infrastructure management.
                        </div>
                    </div>
                    <div >
                        <div className="text-center lg:mt-16">
                        <Image src={CloudInfra} className="mx-auto"/>
                        </div>
                        <div className="font-semibold text-center text-lg mt-2 md:text-2xl">
                        Cloud and Infrastructure
                        </div>
                        <div className="text-center mt-2 mx-14 md:mx-32 lg:mx-10 xl:mx-24 text-lg">
                        We realize an integrated solution and platform that meet client’s needs (flexibility, scalability, or predictable cost structure) to optimize and aligning all cross business functionalities is mandatory.
                        We work closely with you to create customized infrastructure plans that are seamlessly integrated, effective and sustainable for many years to come. We also provide cloud migration and infrastructure modernization services.
                        </div>
                    </div>
                    <div >
                        <div className="text-center lg:mt-24">
                        <Image src={ExpertAdv} className="mx-auto"/>
                        </div>
                        <div className="font-semibold text-center text-lg mt-2 md:text-2xl">
                        Expert Advisory
                        </div>
                        <div className="text-center mt-2 mx-14 md:mx-32 lg:mx-10 xl:mx-24 text-lg">
                        A team of experts with deep knowledge in both business and technology are ready to boost your digital transformation. Our experts are solving complex challenges, navigating evolving IT transformation opportunities and deliver comprehensive training to our customers.

                    
                        </div>
                    </div>

            <div className="  w-full items-center  justify-center grid-cols-none text-center lg:hidden">
{/* padding: '12px', fontSize: '16px' */}
{/* <a href="/table" type="button" className="ease-in-out duration-300 font-body text-white bg-[#77AFDA] hover:bg-[#77AFDA] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-[#77AFDA] dark:hover:bg-blue-300 focus:outline-none dark:focus:ring-blue-800">View Training Schedule</a> */}
            </div>
                </div>
            </div>
            <div className="  w-full items-center  justify-center grid-cols-none text-center hidden lg:block lg:ml-40">
{/* padding: '12px', fontSize: '16px' */}
{/* <a href="/table" type="button" className="ease-in-out duration-300 lg:-mt-40 lg:-ml-[270px] absolute font-body text-white bg-[#77AFDA] hover:bg-[#77AFDA] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-[#77AFDA] dark:hover:bg-blue-300 focus:outline-none dark:focus:ring-blue-800">View Training Schedule</a> */}
            </div>
        </div>
            
    )
}

export default Services