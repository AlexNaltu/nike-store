"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ShoppingBasketIcon } from "lucide-react";
import Hero from "./Hero";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Men",
    href: "/Men",
  },
  {
    name: "Women",
    href: "/Women",
  },
  {
    name: "Teens",
    href: "/Teens",
  },
];

export default function Navbar() {
  const pathName = usePathname();
  return (
    <header className="bg-p-color">
      <div className="flex justify-around p-4 items-center border-b-2 border-bg-p-color shadow">
        <nav className="hidden sm:flex text-lg font-semibold gap-x-3 my-4">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathName === link.href ? (
                <Link
                  href={link.href}
                  className="font-bold text-lg text-t-color"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="font-semibold text-lg text-white transition hover:text-t-color duration-100"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <h1 className="font-black uppercase text-lg md:text-2xl text-white">
          Footwear <span className="text-t-color">Finesse</span>
        </h1>
        <div>
          <ShoppingBasketIcon />
        </div>
      </div>
      <Hero />
    </header>
  );
}
