import Link from "next/link";
import { HiOutlineShoppingCart } from "react-icons/hi";

function Navbar() {
  return (
    <div className="shadow-md flex items-center justify-between px-6 py-5">
      <div className="flex items-center gap-x-10">
        <h1 className="text-lg">Milad Shop</h1>
        <ul className="flex items-center gap-x-3">
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/cart'}>cart</Link>
          </li>
        </ul>
      </div>
      <Link href={`/cart`} className="block relative cursor-pointer">
        <HiOutlineShoppingCart className="text-2xl" />
        <span className="text-xs flex items-center justify-center rounded-full w-4 h-4 bg-red absolute -top-3 -left-3 bg-blue-700 text-white">
          0
        </span>
      </Link>
    </div>
  );
}

export default Navbar;
