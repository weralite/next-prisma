"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

const Breadcrumbs = () => {
  const pathname = usePathname();  // Hämtar den aktuella URL-pathen
  const pathSegments = pathname.split("/").filter(Boolean);  // Delar upp pathen i segment och tar bort tomma delar

  return (
    <nav className="px-20 py-5" aria-label="breadcrumbs">
      <ol className="flex space-x-2">
        <li>
          <Link href="/">
            <p>Home</p>
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");  // Skapar URL för varje breadcrumb
          const displaySegment = capitalizeFirstLetter(decodeURIComponent(segment));  // Kapitaliserar segmentet

          return (
            <li key={index} className="flex items-center">
              <span className="mx-2">/</span>
              <Link href={href}>
               <p>{displaySegment}</p> 
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
