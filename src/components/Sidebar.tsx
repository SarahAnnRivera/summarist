"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { useDispatch } from "react-redux";

import { auth } from "@/firebase";
import { openModal } from "@/authModalSlice";

import Image from "next/image";
import Link from "next/link";

 type SidebarProps = {
  showReaderControls?: boolean; 
  compactForPlayer?: boolean;
  onFontSizeChange?: (size: string) => void;
}


export default function Sidebar({
  showReaderControls = false,
  compactForPlayer = false,
  onFontSizeChange,
}: SidebarProps) {

 const [user, setUser] = useState<User | null>(null);
const dispatch = useDispatch();

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return unsubscribe;
}, []); 



  return (
    <aside className="hidden md:flex fixed left-0 top-0 flex h-screen w-[200px] flex-col border-r border-gray-200 bg-white">
      
      {/* Logo */}
      <div className="px-5 py-6">
        <Image
          src="/assets/logo.png"
          alt="Summarist"
          width={160}
          height={40}
        />
      </div>

      {/* Main Navigation */}
      <nav className="flex flex-col">
        <Link
  href="/for-you"
  className="cursor-pointer px-5 py-4"
>
  For you
</Link>

<Link
  href="/library"
  className="cursor-pointer px-5 py-4"
>
  My Library
</Link>
        <div className="px-5 py-4 cursor-not-allowed">Highlights</div>
        <div className="px-5 py-4 cursor-not-allowed">Search</div>
        {showReaderControls && (
  <div className="flex items-end gap-4 px-3 py-4">
  <button className="text-sm"
  onClick={() => onFontSizeChange?.("text-sm")}>
    Aa</button>
  <button className="text-base"
  onClick={() => onFontSizeChange?.("text-base")}>
    Aa</button>
  <button className="text-lg"
  onClick={() => onFontSizeChange?.("text-lg")}>
    Aa</button>
  <button className="text-2xl"
  onClick={() => onFontSizeChange?.("text-2xl")}>
    Aa</button>
  </div>
)}
      </nav>

      {/* Bottom Navigation */}
      <div className={compactForPlayer ? "mb-24 mt-auto" : "mt-auto"}>
        <Link href="/settings" className="cursor-pointer px-5 py-4">
  Settings
</Link>
        <div className="px-5 py-4 cursor-not-allowed">Help & Support</div>
       {user ? (
  <button
    onClick={() => signOut(auth)}
    className="w-full cursor-pointer px-5 py-4 text-left"
  >
    Logout
  </button>
) : (
  <button
    onClick={() => dispatch(openModal())}
    className="w-full cursor-pointer px-5 py-4 text-left"
  >
    Login
  </button>
)}
      </div>
    </aside>
  );
}