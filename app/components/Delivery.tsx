 export default function Delivery() {
    return (
    <div className="w-full">
      <div className="w-full border border-blue-500 bg-blue-100 p-6">
        <h1 className="text-teal-600 text-2xl">LIVE DELIVERY</h1>
        <h1 className="font-bold font-serif text-5xl">Follow your order</h1>
        <div className="mt-6 flex w-full gap-2 py-10">
          <input
            type="text"
            placeholder="ENTER ORDER NUMBER"
            className="min-w-0 flex-1 border border-blue-300 bg-white px-4 py-3 outline-none focus:border-teal-600"
          />
          <button className="bg-teal-600 px-6 py-3 font-bold">
            TRACK
          </button>
        </div>
        <div  className="border  border-dotted flex flex-col items-center justify-center gap-5 my-5 py-10"> 
          <h1 className="font-bold text-2xl">No active delivery</h1>
          <h1 className="text-gray-600">Place an order or enter a tracking number above</h1>
        </div>
      </div>
      <div className="w-full border border-blue-500 bg-blue-100 p-6 my-5">
        <h1 className="font-bold ">NEED DELIVERY HELP ?</h1>
        <h1 className="text-gray-600">The Millenium concierge can explain status updates or help with a delivery change.</h1>
        <p className="text-teal-600">hello@millenium.ng</p>
        <p className="text-gray-600">+234 801 234 5678</p>
      </div>
    </div>
    )
 }