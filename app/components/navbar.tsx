import Link from "next/link";
import { Logo } from "./logo";
import { NAVLINk } from "../constants";
import Image from "next/image";
import { ArrowBigLeft } from "lucide";

export const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center w-full h-[70px]  px-16 py-4">
      <Link href="/">
        <Logo />
      </Link>
      <ul className="flex justify-center items-center gap-x-4">
        {NAVLINk.map((link) => (
          <Link href={link.href} key={link.key} className=" font-semibold">
            {link.label}
          </Link>
        ))}
      </ul>
      <div>
        <button className=" bg-black text-white rounded-full  p-4 lg:px-16 xl:px-0  text-center">
          Sign in
        </button>
      </div>
    </nav>
  );
};
