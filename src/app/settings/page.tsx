"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { auth } from "@/firebase";
import { openModal } from "@/authModalSlice";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";

export default function SettingsPage() {
  const [user, setUser] = useState<User | null>(null);
  const [subscription, setSubscription] = useState("basic");

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  return (
  <div className="min-h-screen bg-white text-[#032b41]">
    <Sidebar />

    <main className="ml-[200px]">
      <SearchBar />

      <div className="mx-auto max-w-[1070px] px-6 py-8">
        <h1 className="text-2xl font-bold">Settings</h1>
        <div className="mt-4 border-t border-gray-200" />
        {!user ? (
  <div className="flex flex-col items-center py-16">
    <img
      src="/assets/login.png"
      alt="Login"
      className="w-[320px]"
    />

    <h2 className="mt-8 text-xl font-bold">
      Log in to your account to see your details.
    </h2>

    <button
      onClick={() => dispatch(openModal())}
      className="mt-5 rounded bg-[#2bd97c] px-16 py-3 font-medium"
    >
      Login
    </button>
  </div>
) : (
   <div className="mt-10 max-w-[320px]">
  <div className="border-b border-gray-200 pb-6">
    <h2 className="font-bold">
      Your Subscription plan
    </h2>

    <p className="mt-2 capitalize">
      {subscription}
    </p>

    {subscription === "basic" && (
      <button
        onClick={() => router.push("/choose-plan")}
        className="mt-3 rounded bg-[#2bd97c] px-5 py-3 font-medium"
      >
        Upgrade to Premium
      </button>
    )}
  </div>

  <div className="pt-6">
    <h2 className="font-bold">Email</h2>
    <p className="mt-2">
      {user.email ?? "Guest user"}
    </p>
  </div>
</div>

)} 

</div>
</main>
</div> )}