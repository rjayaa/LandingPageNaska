import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import con1 from "../public/images/Product/con1.png"
import con2 from "../public/images/Product/con2.png"
import con3 from "../public/images/Product/con3.png"
import con4 from "../public/images/Product/con4.png"
import con5 from "../public/images/Product/con5.png"
import con6 from "../public/images/Product/con6.png"
import con22 from "../public/images/Product/con22.png"
import Link from 'next/link'
const Product3 = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  // sm:bg-red-500 md:bg-green-600 lg:bg-yellow-700 xl:bg-purple-100
  //bg-[url('/images/bgcontact.png')]
  return (
    <div id="product" className="w-full  mb-5 h-[470px] lg:h-screen xl:h-[600px] md:mx-18 bg-cover bg-no-repeat bg-[url('/images/bgcontact.png')] ">
      <div className="">
      <div className="pt-16 xl:pt-20">

      <h1 className="text-center product-scroll text-3xl   md:text-3xl lg:text-4xl text-[#234561] ">Our Product</h1>
      </div>
      <p className="text-center text-md sm:text-xl mx-2 md:mt-2 mt-3">
        Focus only on the meaning, we take care of the design. As soon as the
        meeting end you can export in one click into your preferred format.
      </p>
      <div className="hidden lg:block">
      <Carousel
        centerMode={true}
        responsive={responsive}
        swipeable={true}
        draggable={false}
        showDots={false}
        infinite={true}
        autoPlay={true}
        dotColor="black"
        ssr={true}
        className=" lg:mx-40 mb-14 mt-10 "
        >
        
     
      
      <div  className=" lg:block ease-in-out duration-300  h-[350px] bg-no-repeat bg-[url('/images/Product/con1.png')]  mx-5  mb-5 md:mb-10 "> </div>
      
      <div  className=" lg:block ease-in-out duration-300  h-[350px] bg-no-repeat bg-[url('/images/Product/con2.png')] hover:bg-[url('/images/Product/con22.png')] mx-5  mb-5 md:mb-10 "> </div>
   
      <div  className=" lg:block h-[350px] ease-in-out duration-300 bg-no-repeat bg-[url('/images/Product/con3.png')] hover:bg-[url('/images/Product/con33.png')] mx-5  mb-5 md:mb-10 "> </div>
      
      <div  className=" lg:block h-[350px] ease-in-out duration-300 bg-no-repeat bg-[url('/images/Product/con4.png')] hover:bg-[url('/images/Product/con44.png')] mx-5  mb-5 md:mb-10 "> </div>
      
      <div  className=" lg:block h-[350px] ease-in-out duration-300 bg-no-repeat bg-[url('/images/Product/con5.png')]  mx-5  mb-5 md:mb-10 "> </div>
      
      
      <div  className=" lg:block h-[350px] ease-in-out duration-300 bg-no-repeat bg-[url('/images/Product/con6.png')] hover:bg-[url('/images/Product/con66.png')]  mx-5  mb-5 md:mb-10 "> </div>
     
       
        

      </Carousel>
        </div>
      <div className="block lg:hidden">
      <Carousel
        centerMode={true}
        responsive={responsive}
        swipeable={true}
        draggable={false}
        showDots={false}
        infinite={true}
        autoPlay={true}
        dotColor="black"
        ssr={true}
        className=" lg:mx-40 mb-14 mt-10 "
        >
      <div className="mx-5 block lg:hidden ">
          <Image src={con1} height={350} width={350} />
        </div>
      <div className="mx-5 block lg:hidden ">
          <Image src={con2} height={350} width={350} />
        </div>
        <div className="mx-5 block lg:hidden ">
          <Image src={con3} height={350} width={350} />
        </div>
        <div className="mx-5 block lg:hidden ">
          <Image src={con4} height={350} width={350} />
        </div>
        <div className="mx-5 block lg:hidden ">
          <Image src={con5} height={350} width={350} />
        </div>
        <div className="mx-5 block lg:hidden ">
          <Image src={con6} height={350} width={350} />
        </div>
        </Carousel>
      </div>
        
        </div>
    </div>
  );
};

export default Product3;
