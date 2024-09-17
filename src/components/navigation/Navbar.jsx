"use client";

import { usePathname } from "next/navigation";

export default function Navbar() {
const pathName = usePathname();

  return (
    <nav>
   <ul className="flex flex-row gap-5">
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/about">About</a>
        </li>
        <li>
            <a href="/contact">Contact</a>
        </li>
   </ul>
    </nav>
  );
}