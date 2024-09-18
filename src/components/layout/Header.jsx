import Navbar from "../navigation/Navbar";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center px-20 py-5 border-b-2">
        <Link href="/">
      <h1>My App</h1>
        </Link>
      <Navbar />
    </header>
  );
}