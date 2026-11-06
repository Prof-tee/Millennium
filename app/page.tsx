import Image from "next/image";
import Navbar from "./components/Navbar";
import Pics from "./components/Pics";
import Pic2 from "./components/Pic2";
import Footer from "./components/Footer";
export default function page() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <main className =" container mx-auto px-4 py-8 ">
        <p className ="text-teal-400 ml-5">NEW SEASON - 2026</p>
        <div  className ="text-7xl font-bold ml-5">
        <h1 className="font-serif">Dress</h1>
        <h1 className="font-serif text-teal-400">Bold</h1>
        <h1 className="font-serif">Live</h1>
        <h1 className="font-serif">Louder</h1>
        </div>
        <p className="inline-block w-75 ml-5">Curated menswear for the modern wardrobe.
         Suits, sneakers, and accessories crafted to last —
         to stand out.</p>
         <div className="mt-4 flex gap-4 ml-5">
       <button className="rounded bg-teal-400 px-4 py-2 text-white hover:bg-teal-700"> SHOP NOW</button>
       <button className="rounded border-2 border-teal-600 px-4 py-2 text-teal-600 transition hover:bg-teal-600 hover:text-white"> OUR STORY </button>
         </div>
         <div className="relative left-1/2 my-12 h-[min(170vw,700px)] w-screen -translate-x-1/2">
          <Image
            src="/merged.jpg"
            alt="A collage of menswear, shoes, and accessories"
            fill
            sizes="150vw"
            className="object-cover"
          />
         </div>
         <div className="mt-15">
          <p className="ml-5 text-teal-500">SHOP BY</p>
          <h1 className="font-serif font-bold text-5xl ml-5">Categories</h1>
          <Pics />
        </div>
        <div className="relative left-1/2 mt-15 w-screen -translate-x-1/2 bg-blue-300">
          <div className="container mx-auto px-4 py-8">
          <p className="ml-5 text-teal-500">HANDPICKED</p>
          <span className="flex justify-between ">  
            <h1 className="font-serif font-bold text-5xl ml-5">Featured</h1>
            <h5>VIEW ALL</h5>
          </span>
             <Pic2 />
          </div>
         </div>
         <div className="relative left-1/2 m-auto w-screen -translate-x-1/2 overflow-hidden rounded-lg">
           <Image
             src="/13th-pic.png"
             alt="Describe the picture"
             width={1600}
             height={900}
             className="h-[350px] w-full rounded-lg object-cover"
           />
           <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 px-4 text-center text-white">
             <p className="text-teal-300 my-3">Limited Drop</p>
             <h1 className="font-serif text-5xl font-bold my-3">Summer Edit '26</h1>
             <button className="my-4 rounded bg-teal-400 px-4 py-2 text-white transition hover:bg-teal-700">
               EXPLORE COLLECTION
             </button>
           </div>
         </div>
         
         <div>
            <div className="flex justify-center gap-10 my-5">
             <span className="block border-2 rounded-lg  border-blue-400 text-center p-10 hover:bg-blue-400 transition hover:text-white">
                <p>Free Delivery</p> 
                <p> on orders above N50,000</p> 
             </span>
             <span className="block border-2 rounded-lg  border-blue-400 text-center p-10 hover:bg-blue-400 transition hover:text-white">
                <p>Easy Returns</p>
                <p>14-day hassle-free returns</p>
             </span>
           </div>
           <div className="flex justify-center gap-10 my-5">
             <span className="block border-2 rounded-lg  border-blue-400 text-center p-10 hover:bg-blue-400 transition hover:text-white">
              <p> Secured payment</p>
              <p> Powered by Paystack</p>
             </span>
             <span className="block border-2 rounded-lg border-blue-400 text-center p-10 hover:bg-blue-400 transition hover:text-white">
              <p>Verified Quality</p>
              <p>5,000+ happy customers</p>
             </span>
           </div>
         </div>
       
         </main>
        <Footer />
    </div>
  );
}

