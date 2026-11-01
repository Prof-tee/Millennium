import Image from "next/image";

type Product = {
  image: string;
  title: string;
  price: string;
};

const products: Product[] = [
  { image: "/3rd pic.jpg", title: "Classic Tailored Suit", price: "N150,000" },
  { image: "/4th pic.jpg", title: "Everyday Essential", price: "N100,000" },
  { image: "/5th pic.jpg", title: "Modern Accessories", price: "N120,000" },
  { image: "/9th pic.jpg", title: "Quality Footwear", price: "N20,000" },
  { image: "/12th pic.avif", title: "Designer's Watch", price: "N50,000" },
];

export default function Pics() {
  return (
  
    <section className="grid w-full grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <article key={product.title} className="group overflow-hidden rounded-md border border-gray-200 bg-white">
          <Image
            src={product.image}
            alt={product.title}
            
            width={600}
            height={750}
            className="aspect-[4/5] w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.06]"
          />
          <div className="space-y-2 p-4">
            <h2 className="font-medium text-gray-900">{product.title}</h2>
            <p className="text-gray-600">{product.price}</p>
          </div>
        </article>
      ))}
    </section>
  );
}