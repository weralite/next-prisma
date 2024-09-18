"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathName = usePathname();

  const siteRoutes = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="flex items-center">
      <ul className="flex flex-row gap-5">
        {siteRoutes.map((siteRoute) => (
          <li
            key={siteRoute.path}
            className={`relative text-2xl ${pathName === siteRoute.path ? "after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-current after:left-0 after:bottom-0 after:transition-all after:duration-150" : "after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-current after:left-1/2 after:bottom-0 after:transition-all after:duration-150 hover:after:w-full hover:after:left-0"}`}
          >
            <Link href={siteRoute.path}>{siteRoute.name}</Link>
          </li>
        )

        )}
      </ul>
    </nav>
  );
}