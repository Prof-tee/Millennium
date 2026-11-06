export default function Order() {
    return (
    <div className="space-y-4">
    <h1 className="text-teal-600 text-2xl ">YOUR ARCHIVE</h1>
    <div className="flex justify-between items-center">
         <p className="font-serif text-5xl font-bold">Order history</p>
      <p>Stored securely on this device</p>
    </div>
    <div className="flex flex-col gap-4 border border-dotted border-blue-600 items-center p-25">
        <h1 className="font-bold text-4xl font-serif">Your wardrobe starts here.</h1>
        <p>Completed orders will be saved in this space.</p>
    <button className="bg-teal-600 py-5 px-7 font-bold">EXPLORE  THE  COLLECTION</button>
        </div>
    </div>
    )
}