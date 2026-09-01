"use client";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/authModalSlice";
import type { RootState } from "@/store";
import { auth } from "@/firebase";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signInAnonymously, createUserWithEmailAndPassword, sendPasswordResetEmail, } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthModal() {

    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const router = useRouter();

     const isOpen = useSelector(
    (state: RootState) => state.authModal.isOpen
  );

  if (!isOpen) return null;

  const handleGuestLogin = async () => {
  try {
    await signInAnonymously(auth);
    dispatch(closeModal());
    router.push("/for-you");
  } catch (error) {
    console.error(error);
  }
};

const handleGoogleLogin = async () => {
  try {
    const provider = new GoogleAuthProvider();

    await signInWithPopup(auth, provider);
    dispatch(closeModal());
  } catch (error) {
    console.error(error);
  }
};

const handleEmailAuth = async () => {
  try {
    setError("");

    if (isRegistering) {
      await createUserWithEmailAndPassword(auth, email, password);
    } else {
      await signInWithEmailAndPassword(auth, email, password);
    }

    dispatch(closeModal());
  } catch (error) {
    console.error(error);
  }
};

const handleForgotPassword = async () => {
  try {
    setError("");

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.error(error);
    setError("Unable to send password reset email.");
  }
};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
        <div className="relative w-[400px] max-w-[90vw] overflow-hidden rounded-2xl bg-white px-9 pt-7 text-[#032b41]">
            <button onClick={() => dispatch(closeModal())}
  type="button"
  className="absolute right-8 top-6 text-3xl cursor-pointer font-light text-black transition active:scale-90"
>
  ×
</button>


  <h2 className="mb-6 text-center text-l font-bold text-[#032b41]" >
    {isRegistering ? "Sign up to Summarist" : "Log in to Summarist"}</h2>

  <button  type="button"
  onClick={handleGuestLogin}
  className="h-12 w-full rounded-md bg-[#4f63a5] py-4 text-l text-white" >
    Login as a Guest</button>

 <div className="my-4 flex items-center gap-6">
  <div className="h-px flex-1 bg-gray-300" />
  <span className="text-sm font-semibold text-[#394547]">or</span>
  <div className="h-px flex-1 bg-gray-300" />
</div>

  <button onClick={handleGoogleLogin}
  type="button"
  className="h-12 w-full rounded-md bg-[#5c85e8] py-4 text-l text-white">
    Login with Google</button>

  <div className="my-4 flex items-center gap-6">
  <div className="h-px flex-1 bg-gray-300" />
  <span className="text-sm font-semibold text-[#394547]">or</span>
  <div className="h-px flex-1 bg-gray-300" />
</div>

  <input
  type="email"
  value={email}
   onChange={(e) => setEmail(e.target.value)}
  placeholder="Email Address"
  className="mb-4 h-12 w-full rounded border-2 border-[#bac8ce] px-4 text-base outline-none"
/>

<input
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  placeholder="Password"
  className="mb-4 h-12 w-full rounded border-2 border-[#bac8ce] px-4 text-base outline-none"
/>
{error && (
  <p className="mb-4 text-sm text-red-500">
    {error}
  </p>
)}

  <button onClick={handleEmailAuth}
  type="button"
  className="h-12 w-full cursor-pointer rounded bg-[#2bd97c] text-lg text-[#032b41] transition hover:bg-[#20ba68] active:scale-[0.98]"
>
  {isRegistering ? "Sign Up" : "Login"}
</button>

<div className="flex justify-center py-3">
  <button
    type="button"
    onClick={handleForgotPassword}
    className="cursor-pointer text-[#5c85e8]"
  >
    Forgot your password?
  </button>
</div>

 <div className="flex justify-center bg-[#f1f6f4] py-3">
  <button
    type="button"
    onClick={() => setIsRegistering(!isRegistering)}
    className="cursor-pointer text-[#5c85e8]"
  >
    {isRegistering
      ? "Already have an account?"
      : "Don't have an account?"}
  </button>
</div>
</div>
  
  </div>

  );
}