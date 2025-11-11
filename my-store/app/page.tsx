/* eslint-disable @next/next/no-img-element */
export default function Home() {
  const products = [
    { id: 1, name: "Product A", price: 999, image: "/product-images/a.jpg" },
    { id: 2, name: "Product B", price: 1499, image: "/product-images/b.jpg" },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="text-center py-20 bg-white shadow">
        <h1 className="text-4xl font-bold">Welcome to My Store</h1>
        <p className="text-gray-600 mt-2">Simple. Modern. Fast.</p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
        {products.map((p) => (
          <a key={p.id} href={`/product/${p.id}`} className="border rounded-xl p-4 bg-white shadow hover:shadow-lg">
            <img src={p.image} alt={p.name} className="w-full h-48 object-cover rounded-lg" />
            <h2 className="mt-3 text-lg font-semibold">{p.name}</h2>
            <p className="text-gray-700">₹{p.price}</p>
          </a>
        ))}
      </section>
    </main>
  );
}
