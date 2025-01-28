import Link from "next/link";
import { HiOutlineShoppingCart } from "react-icons/hi";
import BasketCount from "./BasketCount";

function Navbar() {
  const navLinks = [
    { id: 1, href: "/", label: "Home" },
    { id: 2, href: "/cart", label: "cart" },
  ];
  return (
    <div className="shadow-md flex items-center justify-between px-6 py-5">
      <div className="flex items-center gap-x-10">
        <h1 className="text-lg">Milad Shop</h1>
        <ul className="flex items-center gap-x-3">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Link href={`/cart`} className="block relative cursor-pointer">
        <HiOutlineShoppingCart className="text-2xl" />
        <BasketCount />
      </Link>
    </div>
  );
}

export default Navbar;
