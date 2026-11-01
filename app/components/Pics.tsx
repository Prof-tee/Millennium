import Image from "next/image";

type Product = {
  image: string;
  title: string;
  price: string;
};

const products: Product[] = [
  { image: "/1st pic.jpg", title: "Classic Tailored Suit", price: "N150,000" },
  { image: "/2nd pic.jpg", title: "Everyday Essential", price: "N100,000" },
  { image: "/11th pic.jpg", title: "Modern Streetwear", price: "N120,000" },
  { image: "/6th pic.jpg", title: "Quality Accessories", price: "N20,000" },
  { image: "/10th pic.jpg", title: "Designer's Watch", price: "N50,000" },
];

export default function Pics() {
  return (
  
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <article key={product.title} className="group relative  rounded-md border border-gray-200 bg-white">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.06]"
            />
          </div>
          <div className="space-y-2 p-4">
            <h2 className="font-medium text-gray-900">{product.title}</h2>
            <p className="text-gray-600">{product.price}</p>
          </div>
        </article>
      ))}
    </section>
  );
}