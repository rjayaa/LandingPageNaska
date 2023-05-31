import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

export default function Contact() {
      function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_wjhhyck','template_pvstikv', e.target, '_AdgSGHTV3jwBcs99')
        .then((result) =>{
          console.log(result.text);
        }, (error) =>{
          console.log(error.text);
        });
        e.target.reset()
      }
  return (
    <div id='contact' className="bg-[url('/images/bgcontact.png')] mt-28 h-screen">
    <div className='max-w-[1240px] mt-4 m-auto p-4 h-[700px] z-50 footer-bg' id='secsel'>
        <h1 className='text-2xl  text-center p-4 lg:mt-10 lg:mb-2 md:mt-10 lg:text-3xl'>Let's Work Together!</h1>
        <div className="text-center -mt-4 mb-4 mx-3 lg:pb-10 md:pb-3">
        Feel free to drop messages for any inquiry you believe we can answer
        </div>
        <form className='max-w-[600px] m-auto' onSubmit={sendEmail}> 
            <div className='grid grid-cols-2 gap-2'>
                <input className='border shadow-lg p-3' type="text" placeholder='Name' name="name"/>
                <input className='border shadow-lg p-3' type="email" placeholder='Email' name="email"/>
            </div>
            <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder='Subject' name="subject" />
            <textarea className='border shadow-lg p-3 w-full' cols="30" rows="10" placeholder='Message' name="message"></textarea>
            <button type="submit" className='mt-2 text-black bg-transparent hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center  dark:hover:bg-blue-300 ease-in-out duration-300' >Submit</button>
        </form>
    </div>
    </div>
 )
}
// border shadow-lg p-3 w-full mt-2 
// text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800


