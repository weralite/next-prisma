import Navbar from "../navigation/Navbar";
import Link from "next/link";

export default function Header() {
  return (
    
    <header className="flex flex-row justify-center sm:justify-between px-10 py-5 border-b-2">
      <Link href="/">
      <h1 className="hidden sm:block">My App</h1>
      </Link>

      <Navbar />

    </header>
  );
}