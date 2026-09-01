"use client";

import Image from "next/image";
import { openModal } from "@/authModalSlice";
import { useDispatch } from "react-redux";

export default function Hero() {
  const dispatch = useDispatch();
  return (
    <section>
      <div className="mx-auto flex max-w-[1070px] items-center justify-between px-6 py-10">
        <div className="mx-auto max-w-[430px] text-center md:mx-0 md:text-left">
          <h2 className="text-3xl font-bold leading-tight text-[#032b41]">
            Gain more knowledge
            <br />
            in less time
          </h2>

          <p className="mt-6 text-xl leading-8 text-[#394547]">
            Great summaries for busy people,
            <br />
            individuals who barely have time to read,
            <br />
            and even people who don&apos;t like to read.
          </p>

          <button className="mt-8 rounded-md bg-[#2bd97c] px-10 py-3 font-medium text-[#032b41] transition hover:bg-[#20ba68]"
          onClick={() => dispatch(openModal())}>
            Login
          </button>
        </div>

        <div className="hidden md:block md:w-[400px]">
          <Image src="/assets/landing.png" alt="Landing Image" width={400} height={400} />
        </div>
      </div>
    </section>
  );
}