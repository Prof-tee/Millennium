function Footer() {
  return(
<div>
  <footer className=" w-full text-white text-center  bg-linear-to-t from-blue-800 from-85% to-transparent">
    <div className="block  py-10 text-lg  ">
       <h6 className="font-bold py-5 mt-10">MILLENIUM</h6>
       <p>Fashion for every moment. Crafted with intention, worn with confidence.</p>
      <span className="justify-center flex gap-4 mt-5">
       <button className="rounded border-2 border-white px-4 py-2  transition hover:bg-white text-white hover:text-blue-800"> IG </button>
       <button className="rounded border-2 border-white px-4 py-2  transition hover:bg-white text-white hover:text-blue-800"> FB </button>
       <button className="rounded border-2 border-white px-4 py-2 transition hover:bg-white text-white hover:text-blue-800"> LI </button>
     </span>
    </div>
    <div className="flex justify-around py-5  text-lg">
      <span>
       <p className="py-3 font-bold">Clothing</p>
       <p className="py-2">Footwear</p>
       <p className="py-2"> Accessories</p>
       <p className="py-2">New Arrivals</p>
       <p className="py-2"> Shop</p>
      </span>
      <span>
        <p className="py-3 font-bold">Company</p>
        <p className="py-2">  About Us</p>
       <p className="py-2"> Contact</p>
       <p className="py-2"> Careers</p>
       <p className="py-2"> Press</p>
      </span>
      <span>
        <p className="py-3 font-bold">Support</p>
       <p className="py-2"> Shipping & Delivery</p>
        <p className="py-2">Returns</p>
        <p className="py-2">FAQ</p>
        <p className="py-2">Track Order</p>
      </span>
    </div>
      <hr className="mx-auto w-24/25 border-white" />
    <div className="flex justify-between py-5 px-10 flex-wrap">
      <p>© 2026 Millenium. All rights reserved.</p>
     <span className="flex gap-4 mt-3"> 
      <p>  Privacy Policy</p>
       <p> Terms of Use</p>
        <p> Cookie Policy</p>
     </span>
    </div>
  </footer>
</div>
  )

}
export default Footer;
