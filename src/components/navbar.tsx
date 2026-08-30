"use client";

import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { openModal } from "@/authModalSlice";



export default function Navbar() {
    const dispatch = useDispatch();
  return (
    <nav className="flex h-20 items-center justify-between px-6 text-[#032b41]">
        <div>
            <Image src="/assets/logo.png" alt="Sumarist Logo" width={200} height={60} className="w-40"/>
        </div>
        <div>
            <ul className="flex items-center gap-6 text-sm font-medium" >
                <li>
                    <button className="cursor-pointer transition hover:bg-[#20ba68] active:scale-[0.98]" onClick={() => dispatch(openModal())}>
                             Login
                            </button>
                    </li>
                <li><Link href="#">About</Link></li>
                <li><Link href="#">Contact</Link></li>
                <li><Link href="#">Help</Link></li>
            </ul>
        </div>
      
    </nav>
  );
}
