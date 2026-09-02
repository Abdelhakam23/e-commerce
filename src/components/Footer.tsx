import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-4 md:gap-0 md:flex-row md:justify-between md:items-start mt-16 bg-gray-800 p-8 rounded-lg ">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center ">
          <Image
            src="/logo.png"
            alt="Logo"
            width={36}
            height={36}
            className="w-6 h-6 md:w-9 md:h-9"
          />
          <p className="hidden md:block text-md font-medium tracking-wider uppercase  text-white ">
            Abdelhakam store
          </p>
        </Link>

        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Abdelhakam Store.
        </p>
        <p className="text-gray-400 text-sm ">All rights reserved.</p>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <h3 className="mb-3 text-white ">Links</h3>
        <ul className="flex flex-col items-center md:items-start gap-2 *:text-amber-50 *:text-sm *:hover:text-amber-300 *:transition-colors *:duration-200">
          <li>
            <Link href="/">HomePage</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
          <li>
            <Link href="/">Terms of Service</Link>
          </li>
          <li>
            <Link href="/">Privacy Policy</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <h3 className="mb-3 text-white ">Products</h3>
        <ul className="flex flex-col items-center md:items-start gap-2 *:text-amber-50 *:text-sm *:hover:text-amber-300 *:transition-colors *:duration-200">
          <li>
            <Link href="/">All Products</Link>
          </li>
          <li>
            <Link href="/">New Arrivals</Link>
          </li>
          <li>
            <Link href="/">Best Sellers</Link>
          </li>
          <li>
            <Link href="/"> Sale</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <h3 className="mb-3 text-white ">Company</h3>
        <ul className="flex flex-col items-center md:items-start gap-2 *:text-amber-50 *:text-sm *:hover:text-amber-300 *:transition-colors *:duration-200">
          <li>
            <Link href="/">About Us</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">Affiliate Program</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
