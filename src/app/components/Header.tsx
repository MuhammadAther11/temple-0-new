'use client';

import { useState } from "react";
import { CgSearch } from "react-icons/cg";
import { BiHeart } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/">
          {/* <Image src="/ather.png" alt="Logo" width={50} height={50} /> */}
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/Shop" className="hover:text-blue-500">Shop</Link>
          <Link href="/About" className="hover:text-blue-500">About</Link>
          <Link href="/Contact" className="hover:text-blue-500">Contact</Link>
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-6">
          <a href="/Account">
            <Image src="/ather.png" alt="Account" width={25} height={25} />
          </a>
          <a href=""><CgSearch size={25} /></a>
          <a href=""><BiHeart size={25} /></a>
          <a href="/Cart"><AiOutlineShoppingCart size={25} /></a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col items-center gap-4 pb-4">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/Shop" className="hover:text-blue-500">Shop</Link>
          <Link href="/About" className="hover:text-blue-500">About</Link>
          <Link href="/Contact" className="hover:text-blue-500">Contact</Link>
        </nav>
      )}
    </header>
  );
}
