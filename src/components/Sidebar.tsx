"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase";
import { openModal } from "@/authModalSlice";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

 type SidebarProps = {
  showReaderControls?: boolean; 
  compactForPlayer?: boolean;
  onFontSizeChange?: (size: string) => void;
  fontSize?: string;
}


export default function Sidebar({
  showReaderControls = false,
  compactForPlayer = false,
  onFontSizeChange,
  fontSize,
}: SidebarProps) {

 const [user, setUser] = useState<User | null>(null);
const dispatch = useDispatch();
const router = useRouter();
const [mobileOpen, setMobileOpen] = useState(false);
const pathname = usePathname();

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return unsubscribe;
}, []); 

const handleLogout = async () => {
  await signOut(auth);
  router.push("/");
};



  return (
    <>
    {/* Mobile burger */}
    <button
      onClick={() => setMobileOpen(true)}
      className="fixed left-4 top-4 z-50 rounded-md bg-white p-2 shadow md:hidden"
      aria-label="Open sidebar"
    >
      ☰
    </button>

    {/* Mobile sidebar */}
    {mobileOpen && (
      <div className="fixed inset-0 z-50 md:hidden">
        {/* dark overlay */}
        <div
          onClick={() => setMobileOpen(false)}
          className="absolute inset-0 bg-black/40"
        />

        {/* menu */}
        <aside className="relative z-10 flex h-full w-[260px] flex-col bg-white">
          <div className="flex items-center justify-between border-b px-5 py-4">
            <span className="font-bold text-[#032b41]">
              Summarist
            </span>

            <button
              onClick={() => setMobileOpen(false)}
              className="text-2xl"
              aria-label="Close sidebar"
            >
              ✕
            </button>
            
          </div>
          <nav className="flex flex-col">
  <Link
    href="/for-you"
    onClick={() => setMobileOpen(false)}
     className={`relative px-5 py-4 transition cursor-pointer ${
    pathname === "/for-you"
      ? "bg-[#f1f6f4]"
      : "hover:bg-gray-50"
  }`}
>
  {pathname === "/for-you" && (
    <span className="absolute left-0 top-0 h-full w-2 bg-[#2bd97c]" />
  )}
    For you
  </Link>

  <Link
    href="/library"
    onClick={() => setMobileOpen(false)}
     className={`relative px-5 py-4 transition ${
    pathname === "/library"
      ? "bg-[#f1f6f4]"
      : "hover:bg-gray-50"
  }`}
>
  {pathname === "/library" && (
    <span className="absolute left-0 top-0 h-full w-2 bg-[#2bd97c]" />
  )}
    My Library
  </Link>

  <div className="cursor-not-allowed px-5 py-4">
    Highlights
  </div>

  <div className="cursor-not-allowed px-5 py-4">
    Search
  </div>

  {showReaderControls && (
    <div className="flex items-end gap-4 px-3 py-4">
      <button
        className={`"text-sm"
        ${
    fontSize === "text-sm"
      ? "border-b-4 border-[#2bd97c]"
      : "border-b-4 border-transparent"
  }`}
        onClick={() => onFontSizeChange?.("text-sm")}
      >
        Aa
      </button>

      <button
        className={`"text-base"
        ${
    fontSize === "text-base"
      ? "border-b-4 border-[#2bd97c]"
      : "border-b-4 border-transparent"
  }`}
        onClick={() => onFontSizeChange?.("text-base")}
      >
        Aa
      </button>

      <button
        className={`"text-lg"
        ${
    fontSize === "text-lg"
      ? "border-b-4 border-[#2bd97c]"
      : "border-b-4 border-transparent"
  }`}
        onClick={() => onFontSizeChange?.("text-lg")}
      >
        Aa
      </button>

      <button
        className={`"text-2xl"
        ${
    fontSize === "text-2xl"
      ? "border-b-4 border-[#2bd97c]"
      : "border-b-4 border-transparent"
  }`}
        onClick={() => onFontSizeChange?.("text-2xl")}
      >
        Aa
      </button>
    </div>
  )}
</nav>

<div
  className={
    compactForPlayer ? "mb-24 mt-auto" : "mt-auto"
  }
>
  <Link
    href="/settings"
    onClick={() => setMobileOpen(false)}
    className={`"block cursor-pointer px-5 py-4 hover:bg-gray-100"
    ${
    pathname === "/settings"
      ? "border-[#2bd97c] bg-[#f1f6f4]"
      : "border-transparent hover:bg-gray-50"
  }`}
  >
    Settings
  </Link>

  <div className="cursor-not-allowed px-5 py-4">
    Help & Support
  </div>

  {user ? (
    <button
      onClick={handleLogout}
      className="w-full cursor-pointer px-5 py-4 text-left hover:bg-gray-100"
    >
      Logout
    </button>
  ) : (
    <button
      onClick={() => {
        setMobileOpen(false);
        dispatch(openModal());
      }}
      className="w-full cursor-pointer px-5 py-4 text-left hover:bg-gray-100"
    >
      Login
    </button>
  )}
</div>
                  </aside>
      </div>
    )}
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
  className={`relative px-5 py-4 transition cursor-pointer ${
    pathname === "/for-you"
      ? "bg-[#f1f6f4]"
      : "hover:bg-gray-50"
  }`}
>
  {pathname === "/for-you" && (
    <span className="absolute left-0 top-0 h-full w-2 bg-[#2bd97c]" />
  )}  

  For you
</Link>

<Link
  href="/library"
  className={`relative px-5 py-4 transition cursor-pointer ${
    pathname === "/library"
      ? "bg-[#f1f6f4]"
      : "hover:bg-gray-50"
  }`}
>
  {pathname === "/library" && (
    <span className="absolute left-0 top-0 h-full w-2 bg-[#2bd97c]" />
  )}
  My Library
</Link>
        <div className="px-5 py-4 cursor-not-allowed">Highlights</div>
        <div className="px-5 py-4 cursor-not-allowed">Search</div>
        {showReaderControls && (
  <div className="flex items-end gap-4 px-3 py-4">
  <button className={`"text-sm"
  ${
    fontSize === "text-sm"
      ? "border-b-4 border-[#2bd97c]"
      : "border-b-4 border-transparent"
  }`}
  onClick={() => onFontSizeChange?.("text-sm")}>
    Aa</button>
  <button className={`"text-base"
  ${
    fontSize === "text-base"
      ? "border-b-4 border-[#2bd97c]"
      : "border-b-4 border-transparent"
  }`}
  onClick={() => onFontSizeChange?.("text-base")}>
    Aa</button>
  <button className={`"text-lg"
  ${
    fontSize === "text-lg"
      ? "border-b-4 border-[#2bd97c]"
      : "border-b-4 border-transparent"
  }`}
  onClick={() => onFontSizeChange?.("text-lg")}>
    Aa</button>
  <button className={`"text-2xl"
  ${
    fontSize === "text-2xl"
      ? "border-b-4 border-[#2bd97c]"
      : "border-b-4 border-transparent"
  }`}
  onClick={() => onFontSizeChange?.("text-2xl")}>
    Aa</button>
  </div>
)}
      </nav>

      {/* Bottom Navigation */}
      <div className={compactForPlayer ? "mb-24 mt-auto" : "mt-auto"}>
        <Link href="/settings" 
          className={`border-l-4 px-5 py-4 transition cursor-pointer ${
    pathname === "/settings"
      ? "border-[#2bd97c] bg-[#f1f6f4]"
      : "border-transparent hover:bg-gray-50"
  }`}
>
  Settings
</Link>
        <div className="px-5 py-4 cursor-not-allowed">Help & Support</div>
       {user ? (
  <button
    onClick={handleLogout}
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
   </>
  );
}