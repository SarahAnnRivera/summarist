"use client";

import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { openModal } from "@/authModalSlice";
import { useState } from "react";


export default function Navbar() {
    const dispatch = useDispatch();
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <nav className="mx-auto max-w-[1100px] px-6 flex h-20 items-center justify-between text-[#032b41]">
        <div>
            <Image src="/assets/logo.png" alt="Sumarist Logo" width={200} height={60} className="w-40"/>
        </div>
        <div>
           <ul className="hidden items-center gap-6 text-sm font-medium md:flex">
                <li>
                    <button className="cursor-pointer transition hover:bg-[#20ba68] active:scale-[0.98]" onClick={() => dispatch(openModal())}>
                             Login
                            </button>
                    
                    </li>
                    
                <li><Link href="#">About</Link></li>
                <li><Link href="#">Contact</Link></li>
                <li><Link href="#">Help</Link></li>
            </ul>
            <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="text-3xl md:hidden"
  aria-label="Toggle navigation menu"
>
  {menuOpen ? "✕" : "☰"}
</button>
        </div>
      
    </nav>
    {menuOpen && (
  <div className="border-t border-gray-200 bg-white px-6 py-4 md:hidden">
    <ul className="flex flex-col gap-4 text-sm font-medium text-[#032b41]">
      <li>
        <button
          onClick={() => {
            setMenuOpen(false);
            dispatch(openModal());
          }}
          className="cursor-pointer"
        >
          Login
        </button>
      </li>

      <li>
        <Link href="#" onClick={() => setMenuOpen(false)}>
          About
        </Link>
      </li>

      <li>
        <Link href="#" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
      </li>

      <li>
        <Link href="#" onClick={() => setMenuOpen(false)}>
          Help
        </Link>
      </li>
    </ul>
  </div>
)}
</>
  );
}
