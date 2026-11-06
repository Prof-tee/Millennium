import Image from "next/image";
import Navbar from "../components/Navbar";                                                                                                                                                                            
import Footer from "../components/Footer";
import { assetPath } from "../lib/assetPath";
import Pics3 from "../components/Pics3";
export default function Page() {
  return (
    <main>
     <Navbar />
      <div className="relative left-1/2 m-auto w-screen -translate-x-1/2 overflow-hidden rounded-lg mb-10">
           <Image
             src={assetPath("/13th-pic.png")}
             alt="Describe the picture"
             width={1600}
             height={900}
             className="h-[350px] w-full rounded-lg object-cover"
           />
           <div className="absolute inset-0 flex flex-col  px-4  text-white text-center ">
              <p className="text-teal-300 my-3 mr-120">OUR PURPOSE</p>
              <h1 className="font-serif text-9xl font-bold  ">What we </h1>
              <h1 className="font-serif text-9xl text-teal-300 font-bold my-3">Stand for</h1>
         </div>
         </div>
         <div className="border-1 rounded-lg pt-5 mt-10 mx-10 container mx-auto border-blue-200">
            <div className="px-4 py-8">
              <h1 className="text-5xl text-teal-100 my-5 ml-5 font-bold font-serif">01</h1>
              <p className="text-teal-500 my-5 ml-5">OUR MISSION</p>
              <h1 className="font-serif text-5xl font-bold my-5"> Fashion that moves with you </h1>
              <p className="my-5">We are there for every man to dress with intention through distinctive, dependable menswear that balances
                modern style, lasting quality, and honest value. We make confidence easier to wear—from everyday moments to
                defining occasions.
              </p>  
            </div>
            <hr />
            <div className="relative left-1/2 m-auto w-screen -translate-x-1/2 overflow-hidden rounded-lg  container">
              <Image
                src={assetPath("/7th-pic.jpg")}
                alt="Accessories"
                width={1600}
                height={900}
                className="h-[1200px]  rounded-lg object-cover"
             />
             <div className="absolute inset-0 flex  flex-col justify-end px-4 text-white py-8 bg-linear-to-t from-white  to-transparent">
               <h1 className="text-5xl my-5 ml-5 font-bold font-serif opacity-50">02</h1>
               <p className="text-teal-500 my-5 ml-5">OUR VISION</p>
               <h1 className="font-serif text-5xl font-bold my-5">To shape the future of African menswear. </h1>
               <p className="my-5">We envision Millenium as the most trusted destination for contemporary menswear—setting a 
                  standard where thoughtful design, personal service, and accessible style inspire men everywhere to show up
                  with confidence.
                </p>  
             </div>
           </div>
         </div>
         <div className="py-5 my-30  mx-auto bg-blue-200">
         <div className="block  py-10 text-lg  my-10 container items-center mx-auto">
          <span >
                <h6 className=" py-5 text-teal-500 ">WHAT WE STAND FOR</h6>
                <h1 className="font-serif text-5xl font-bold my-5 ">Our Values</h1>
          </span>
             <div className="flex justify-around py-5  text-lg container mx-auto gap-10 ">
               <span>
                 <hr />
                <p className="py-3 font-bold text-3xl text-teal-100">01</p>
                <p className="py-3 font-bold">Quality Without Compromise</p>
                <p className="py-3 font-bold">Every piece in our catalog meets a strict quality 
                  bar. We source carefully, inspect thoroughly, and only offer what we'd wear
                  ourselves.</p>
               </span>
               <span>
                <hr />
                <p className="py-3 font-bold text-3xl text-teal-100">02</p>
                <p className="py-3 font-bold">Accessible Style</p>
                <p className="py-3 font-bold">Great fashion shouldn't require a luxury budget. 
                  We price honestly so more people can build wardrobes they're proud of..</p>
               </span>
               <span>
                <hr />
                <p className="py-3 font-bold text-3xl text-teal-100">03</p>
                <p className="py-3 font-bold">Customer First</p>
                <p className="py-3 font-bold">From first click to front door, your experience is
                   our obsession. Responsive support, easy returns, and fast delivery are non-negotiable.</p>
               </span>
         
             </div>
             </div>
         </div>
          <div className="my-15 ">
                   <p className="ml-5 text-teal-500 my-5">BEHIND THE BRAND</p>
                   <h1 className="font-serif font-bold text-5xl ml-5">The Team</h1>
                   <Pics3 />
                 </div>
                 <div className="bg-blue-200 flex justify-around py-25 text-center ">
                   <span>
                     <h1 className="text-7xl font-bold text-teal-500 font-serif">Nationwide</h1>
                     <p>DELIVERY</p>
                    </span>
                   <span>
                     <h1 className="text-7xl font-bold text-teal-500 font-serif">5K+</h1>
                     <p>HAPPY CUSTOMERS</p>
                    </span>
                   <span>
                     <h1 className="text-7xl font-bold text-teal-500 font-serif">200+</h1>
                     <p>PRODUCTS</p>
                    </span>
                   <span>
                     <h1 className="text-7xl font-bold text-teal-500 font-serif">99.5%</h1>
                     <p>UPTIME GOAL</p>
                    </span>
                 </div>
         <hr />
       <Footer />
   </main>
  );
}
