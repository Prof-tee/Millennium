"use client";

import Link from "next/link";
import { useState } from "react";
import Delivery from "../components/Delivery";
import Orders from "../components/Order";

type CheckoutOption = "payment" | "delivery" | "orders";

function PaymentView() {
  return (
    <form className="w-full space-y-8">
      <section className="space-y-6 border border-blue-500 bg-blue-100 p-6">
        <h2 className="font-serif text-3xl font-bold">Delivery details</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="space-y-2 font-bold">
            <span>First name</span>
            <input type="text" name="firstName" placeholder="Enter your first name" className="w-full border border-teal-600 px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-teal-600" />
          </label>
          <label className="space-y-2 font-bold">
            <span>Last name</span>
            <input type="text" name="lastName" placeholder="Enter your last name" className="w-full border border-teal-600 px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-teal-600" />
          </label>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="space-y-2 font-bold">
            <span>Phone number</span>
            <input type="tel" name="phone" placeholder="Enter your phone number" className="w-full border border-teal-600 px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-teal-600" />
          </label>
          <label className="space-y-2 font-bold">
            <span>Email</span>
            <input type="email" name="email" placeholder="Enter your email address" className="w-full border border-teal-600 px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-teal-600" />
          </label>
        </div>

        <label className="block space-y-2 font-bold">
          <span>Delivery address</span>
          <input type="text" name="address" placeholder="Enter your delivery address" className="w-full border border-teal-600 px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-teal-600" />
        </label>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="space-y-2 font-bold">
            <span>City</span>
            <input type="text" name="city" placeholder="Enter your city" className="w-full border border-teal-600 px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-teal-600" />
          </label>
          <label className="space-y-2 font-bold">
            <span>State</span>
            <input type="text" name="state" placeholder="Enter your state" className="w-full border border-teal-600 px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-teal-600" />
          </label>
        </div>
      </section>

      <section className="space-y-6 border border-blue-500 bg-blue-100 p-6">
        <h2 className="font-serif text-3xl font-bold">Payment details</h2>

        <label className="block space-y-2 font-bold">
          <span>Card holder name</span>
          <input
            type="text"
            name="cardHolder"
            placeholder="Enter the name on your card"
            className="w-full border border-teal-600 px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-teal-600"
          />
        </label>

        <label className="block space-y-2 font-bold">
          <span>Card number</span>
          <input
            type="text"
            name="cardNumber"
            inputMode="numeric"
            placeholder="0000 0000 0000 0000"
            className="w-full border border-teal-600 px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-teal-600"
          />
        </label>
      </section>
      <section className="border border-blue-500 bg-blue-100 p-6">
        <div className="flex justify-between py-3">
        <h1 className="font-bold text-3xl">Your Orders</h1>
        <h1>0 items</h1>
        </div>
        <hr className="border-blue-600 "/>
        <div className="flex flex-col items-center justify-center py-10">
          <p>Your cart is empty </p>
          <p className="text-teal-600 py-3">BROWSE PRODUCTS </p>
        </div>
       <hr className="border-blue-600 "/>
       <div className="flex flex-col items-center justify-center py-10 gap-3">
        <span className="flex justify-between w-full">
          <p>Subtotal</p>
          <p>N0.00</p>
        </span>
        <span className="flex justify-between w-full">
          <p>Delivery</p>
          <p>Free</p>
        </span>
       </div>
       <hr className="border-blue-600 "/>
      <div className="flex flex-col items-center justify-center py-10 gap-10">
        <span className="flex justify-between w-full">
          <p className="font-bold text-2xl">Total</p>
          <p className="font-bold text-2xl">N0.00</p>
        </span>
        <span className="flex justify-between w-full">
         <button type="submit" className="w-full rounded bg-teal-600 px-4 py-5 font-bold">Place Order</button>
        </span>
       </div>
      </section>
    </form>
  );
}

function DeliveryView() {
  return <Delivery />;
}

function OrdersView() {
  return <Orders />;
}

export default function Page() {
  const [activeOption, setActiveOption] = useState<CheckoutOption>("payment");
  const options: CheckoutOption[] = ["payment", "delivery", "orders"];

  const view = {
    payment: <PaymentView />,
    delivery: <DeliveryView />,
    orders: <OrdersView />,
  };

  return (
    <main>
      <nav className="flex justify-between bg-blue-500 p-5 text-white">
        <Link href="/">
          <h1 className="font-serif text-3xl font-bold">MILLENNIUM</h1>
        </Link>
        <p>secure client services</p>
      </nav>

      <div className="container px-10 py-10">
        <Link href="/products" className="my-5 block  hover:underline">
          CONTINUE SHOPPING
        </Link>
        <p className="text-teal-600 pb-3">CLIENT SERVICES</p>
        <h1 className="font-serif text-7xl font-bold">Checkout</h1>
      </div>

      <hr className="border-blue-500" />

      <div className="container px-10 py-6">
        <div className="flex w-full flex-wrap" role="tablist" aria-label="Checkout options">
          {options.map((option, index) => {
            const active = activeOption === option;

            return (
              <button
                key={option}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveOption(option)}
                className={`min-w-[180px] flex-1 border border-teal-600 px-10 py-10 text-base font-bold uppercase transition-colors ${
                  index > 0 ? "-ml-px" : ""
                } ${
                  active
                    ? "bg-teal-600 text-white"
                    : "bg-white text-teal-600 hover:bg-teal-50"
                }`}
              >
                <span className="block">{option}</span>
                {option === "payment" && (
                  <span className="mt-1 block text-sm font-normal normal-case">Secure checkout</span>
                )}
                {option === "delivery" && (
                  <span className="mt-1 block text-sm font-normal normal-case">Track a delivery</span>
                )}
                {option === "orders" && (
                  <span className="mt-1 block text-sm font-normal normal-case">0 Saved</span>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-8" role="tabpanel">
          {view[activeOption]}
        </div>
      </div>
     < hr className="border-blue-600"/>
     <div className="container px-5 py-6 flex justify-between text-sm text-gray-500">
      <p>&nbsp; Millennium &copy; 2024. All rights reserved</p>
       <p> Encrypted checkout · Secure payments · Client services · Privacy policy · Terms of service</p>
     </div>
    </main>
  );
}
