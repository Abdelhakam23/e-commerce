import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const ShoppingCartIcon = () => {
  return (
    <Link href={"/cart"} className="relative  p-1">
      <ShoppingCart className="w-4 h-4 text-gray-500" />
      <span className="absolute -top-1 -right-1  bg-amber-300 rounded-full text-[10px] font-bold text-gray-800   flex h-3 w-3 items-center justify-center text-center align-middle">
        0
      </span>
    </Link>
  );
};

export default ShoppingCartIcon;
