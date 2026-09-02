"use client";

import { CartItemType } from "@/types";
import { ArrowRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const steps = [
  {
    id: 1,
    name: "Shopping Cart",
  },
  {
    id: 2,
    name: "Shipping Address",
  },
  {
    id: 3,
    name: "Payment Method",
  },
];

const cartItems: CartItemType[] = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
    quantity: 1,
    size: "m",
    color: "gray",
  },
  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 59.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    images: { gray: "/products/2g.png", green: "/products/2gr.png" },
    quantity: 2,
    size: "l",
    color: "green",
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
    price: 69.9,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
    quantity: 3,
    size: "s",
    color: "black",
  },
];
const CartPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeStep = parseInt(searchParams.get("step") || "1");
  //   console.log(activeStep);

  return (
    <div className="flex flex-col items-center justify-center gap-8 my-16">
      <h1 className="text-2xl text-gray-800 font-semibold">
        Your Shopping Cart
      </h1>
      {/* Steps */}

      <div className="flex flex-col lg:flex-row items-center gap-12">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex items-center gap-2 border-b-2 ${step.id === activeStep ? "border-gray-800" : "border-gray-400"} pb-3`}
          >
            <span
              className={`h-6 w-6 rounded-full ${activeStep === step.id ? "bg-black text-white" : "bg-gray-400 text-white"}  flex items-center justify-center`}
            >
              {step.id}
            </span>
            <p
              className={`text-sm font-medium  ${activeStep === step.id ? "text-black" : "text-gray-400"}`}
            >
              {step.name}
            </p>
          </div>
        ))}
      </div>

      {/* Items And Details */}
      <div className="flex flex-col gap-12 lg:flex-row w-full items-center justify-center">
        {/* Items */}
        <div className="flex flex-col gap-2 border border-gray-200 rounded-lg shadow-lg w-full lg:w-7/12">
          1
        </div>

        {/* Cart Details */}
        <div className="flex flex-col gap-4 border border-gray-200 rounded-lg shadow-lg w-full lg:w-5/12 p-4">
          {/* title */}
          <p className="font-medium text-gray-800">Cart Details</p>

          {/* details */}
          <div className="flex items-center justify-between text-sm">
            <p className="text-gray-500 capitalize">subtotal</p>
            <p className="text-gray-800 font-bold">
              $
              {cartItems.reduce(
                (acc, cur) => acc + cur.price * cur.quantity,
                0,
              )}
            </p>
          </div>
          <div className="flex items-center justify-between text-sm">
            <p className="text-gray-500 capitalize">disount(10%)</p>
            <p className="text-red-500 font-bold">-$10 </p>
          </div>
          <div className="flex items-center justify-between text-sm">
            <p className="text-gray-500 capitalize">shipping fee</p>
            <p className="text-gray-800 font-bold">$10 </p>
          </div>
          <hr className="border-gray-200" />
          <div className="flex items-center justify-between text-sm">
            <p className="text-gray-800 font-bold  capitalize">total</p>
            <p className="text-gray-800 font-bold">
              ${" "}
              {cartItems.reduce(
                (acc, cur) => acc + cur.price * cur.quantity,
                0,
              )}{" "}
            </p>
          </div>
          {activeStep === 1 && (
            <button
              onClick={() => {
                router.push("/cart?step=2");
              }}
              className="flex items-center font-medium hover:bg-gray-950 transition-colors duration-300 gap-1 w-full justify-center bg-gray-900 text-white p-2 rounded-lg cursor-pointer"
            >
              Continue
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
