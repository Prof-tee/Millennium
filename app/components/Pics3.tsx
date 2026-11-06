import Image from "next/image";
import { assetPath } from "../lib/assetPath";
type Product = {
  image: string;
  name: string;
  title: string;
};

const products: Product[] = [
  { image: assetPath("/2nd-pic.jpg"), name: "Tony Iunobi", title: "Founder & Creative Director" },
  { image: assetPath("/15th-pic.jpg"), name: "Lucy Izunobi", title: "Head of Design" },
  { image: assetPath("/14th-pic.jpg"), name: "Mario Izunobi", title: "Marketing Manager" },
];

export default function Pics() {
  return (
  
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <article key={product.name} className="group relative  rounded-md  bg-white">
          <div className="relative aspect-[4/5] ">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.06]"
            />
</div>
          <div className="space-y-2 p-4">
            <h2 className="font-medium text-gray-900">{product.name}</h2>
            <p className="text-gray-600">{product.title}</p>
          </div>
        </article>
      ))}
    </section>
  );
}