"use client";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, removeFromCart, total, clearCart } = useCart();

  return (
    <main className="max-w-2xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">
                    ₹{item.price} × {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between">
            <p className="text-xl font-semibold">Total: ₹{total}</p>
            <button
              onClick={() => router.push("/payment")}
              className="bg-black text-white px-6 py-3 rounded-lg"
            >
              Proceed to Pay
            </button>
          </div>

          <button
            onClick={clearCart}
            className="mt-4 text-sm text-gray-500 underline"
          >
            Clear Cart
          </button>
        </>
      )}
    </main>
  );
}
