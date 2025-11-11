"use client";
import { useParams, useRouter } from "next/navigation";

export default function ProductPage() {
  const { id } = useParams();
  const router = useRouter();

  const product = {
    id,
    name: `Product ${id}`,
    description: "High-quality item with excellent finish.",
    price: 1299,
    image: `/product-images/a.jpg`,
  };

  return (
    <main className="p-10 flex flex-col md:flex-row gap-10">
      <img src={product.image} alt={product.name} className="w-80 h-80 object-cover rounded-lg" />
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-600 mt-3">{product.description}</p>
        <p className="text-xl mt-5 font-semibold">₹{product.price}</p>
        <button
          onClick={() => router.push("/checkout")}
          className="mt-6 bg-black text-white px-6 py-3 rounded-lg"
        >
          Buy Now
        </button>
      </div>
    </main>
  );
}
