import Image from "next/image"
import { assetPath } from "../lib/assetPath";
import Navbar from "../components/Navbar";                                                                                                                                                                            
import Footer from "../components/Footer";

export default function Page() {
  return (
    <main>
     <Navbar />
      <div className="container m-10 ">
        <p className ="text-teal-500">GET IN TOUCH</p>
        <h1 className = "font-bold text-7xl font-serif">Contact Us</h1>
       <hr/>
       <div className ="m-15">
         <h1 className="font-bold text-2xl" >We'd love to hear from you.</h1>
         <p> Whether you have a question about your order, need help finding
         the right size, or just want to say hello — our team is here for you.
          Reach us through any of the channels below.</p>
       </div>
       <div className ="m-10 flex gap-5">
         <Image
            src={assetPath("/icons8-incoming-call-32.png")}
            alt="Describe the picture"
            width={50}
            height={100}
            className="h-[50px] rounded-lg border-black border-2 p-2"
          />
         <span>
           <h1>PHONE</h1>
           <p>08030929606</p>
         </span>
       </div>
       <div className ="m-10 flex gap-5">
         <Image
            src={assetPath("/icons8-gmail-32.png")}
            alt="Describe the picture"
            width={50}
            height={100}
            className="h-[50px] rounded-lg border-black border-2 p-2"
          />
         <span>
           <h1>E-MAIL</h1>
           <p> titoiunobi @gmail</p>
         </span>
       </div>
       <div className ="m-10 flex gap-5 mb-25">
         <Image
           src="/icons8-location-32.png"
           alt="Describe the picture"
           width={50}
           height={100}
           className="h-[50px] rounded-lg border-black border-2 p-2"
          />
         <span>
           <h1>ADDRESS</h1>
           <p>14 Adeola Odeku Street, Victoria Island, Lagos, Nigeria</p>
         </span>
       </div>
       <hr/>
       <h1 className = "font-bold mt-10">FOLLOW US</h1>
       <div className="flex gap-10 my-5">
        <button className="rounded border-2 border-black px-4 py-2 transition hover:border-teal-600 hover:text-teal-600 block"> <p className="font-bold">INSTAGRAM</p> <p>@ millennium.ng</p></button>
        <button className="rounded border-2 border-black px-4 py-2 transition hover:border-teal-600 hover:text-teal-600 block"> <p className="font-bold">FACEBOOOK</p> <p>Millennium Nigeria</p> </button>
        <button className="rounded border-2 border-black px-4 py-2 transition hover:border-teal-600 hover:text-teal-600 block">  <p className="font-bold">LINKEDIN</p> <p>Millennium Fashion</p> </button>
       </div>
      <div>
        <form>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="font-bold">Name</span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="rounded border border-gray-400 px-4 py-3"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-bold">Email</span>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="rounded border border-gray-400 px-4 py-3"
              />
            </label>
          </div>
          <label className="mt-5 flex flex-col gap-2">
            <span className="font-bold">Subject</span>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full rounded border border-gray-400 px-4 py-3"
            />
          </label>
          <label className="mt-5 flex flex-col gap-2">
            <span className="font-bold">Message</span>
            <textarea
              name="message"
              placeholder="Write your message" 
              rows={7}
              className="w-full resize-y rounded border border-gray-400 px-4 py-3"
            />
          </label>
        <button className="rounded bg-teal-400 px-4 py-5 font-bold text-2xl w-full mt-10 "> SEND MESSAGE</button>
        </form>
      </div>
      </div>
      <hr />
      <Footer />
   </main>
  )
}
