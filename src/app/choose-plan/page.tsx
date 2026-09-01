"use client";

import { useState } from "react";
import { FaFileAlt, FaSeedling, FaHandshake } from "react-icons/fa";
import Footer from "@/components/footer"



export default function ChoosePlanPage() {
  const [selectedPlan, setSelectedPlan] = useState<"yearly" | "monthly">(
    "yearly"
  );
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const handleCheckout = async () => {
  const response = await fetch("/api/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ plan: selectedPlan }),
  });

  const data = await response.json();

  if (data.url) {
    window.location.href = data.url;
  }
};

  return (
    <main>
        <section className="relative overflow-hidden rounded-b-[250px] bg-[#032b41] text-white">
  <div className="mx-auto flex min-h-[640px] max-w-[1100px] flex-col items-center px-6 pt-16 text-center">
    <h1 className="max-w-[850px] text-5xl font-bold leading-tight">
      Get unlimited access to many amazing books to read
    </h1>

    <p className="mt-10 text-xl">
      Turn ordinary moments into amazing learning opportunities
    </p>

    <img
      src="/assets/pricing-top.png"
      alt=""
      className="relative z-20 mt-10 w-[400px] rounded-t-[120px]"
    />
  </div>
</section>
<section className="mx-auto max-w-[1070px] px-6 py-16">
  <div className="flex justify-between gap-10 text-center">

    <div className="flex-1">
    <FaFileAlt className="mx-auto mb-2 h-[60px] w-[60px]"/>
      <h3 className="mt-4 font-bold">Key ideas in few </h3>
      <p className="mt-2 text-sm text-gray-500">min with many books to read</p>
    </div>

    <div className="flex-1">
     < FaSeedling className="mx-auto mb-2 h-[60px] w-[60px]"/>
      <h3 className="mt-4 font-bold">3 million </h3>
      <p className="mt-2 text-sm text-gray-500">people growing with Summarist everyday</p>
    </div>

    <div className="flex-1">
      <FaHandshake className="mx-auto mb-2 h-[60px] w-[60px]"/>
      <h3 className="mt-4 font-bold">Precise recommendations </h3>
      <p className="mt-2 text-sm text-gray-500">collections curated by experts</p>
    </div>

  </div>
</section>

<div className="mx-auto max-w-[700px] px-6 py-16">
    <h2 className="mb-10 text-center text-3xl font-bold">
  Choose the plan that fits you
</h2>
  <button
    onClick={() => setSelectedPlan("yearly")}
    className={`w-full rounded-md border-2 p-6 text-left ${
      selectedPlan === "yearly"
        ? "border-[#2bd97c]"
        : "border-gray-300"
    }`}
  >
    <h3 className="text-lg font-bold">Premium Plus Yearly</h3>
    <p className="mt-2 text-2xl font-bold">$99.99/year</p>
    <p className="mt-2 text-gray-500">7-day free trial included</p>
  </button>

  <div className="text-center font-bold">OR</div>

  <button
    onClick={() => setSelectedPlan("monthly")}
    className={`w-full rounded-md border-2 p-6 text-left ${
      selectedPlan === "monthly"
        ? "border-[#2bd97c]"
        : "border-gray-300"
    }`}
  >
    <h3 className="text-lg font-bold">Premium Monthly</h3>
    <p className="mt-2 text-2xl font-bold">$9.99/month</p>
    <p className="mt-2 text-gray-500">No trial included</p>
  </button>
  <button onClick={handleCheckout}
  className="mt-8 w-full rounded-md bg-[#2bd97c] py-4 font-medium text-[#032b41] hover:bg-[#20ba68]"
>
  Start your free 7-day trial
</button>
<p className="mt-3 text-center text-sm text-gray-500">
  Cancel your trial at any time before it ends, and you won&apos;t be charged.
</p>
</div>
<section className="mx-auto max-w-[800px] px-6 py-16">
  <h2 className="mb-8 text-3xl font-bold">
    Frequently asked questions
  </h2>

  <div className="divide-y divide-gray-200 border-t border-gray-200">
<button className="flex w-full items-center justify-between py-5 text-left"
  onClick={() =>
    setOpenQuestion(openQuestion === 0 ? null : 0)
  }
>
  <span className="font-medium text-[#032b41]">
    How does the free 7 Day trial work?
  </span>

  <span>{openQuestion === 0 ? "−" : "+"}</span>
</button>

{openQuestion === 0 && (
  <p className="pb-5 pr-10 text-sm leading-6 text-gray-500">
    Begin your complimentary 7-day trial with a Summarist annual membership. You are under no obligation to continue your subscription, and you will only be billed when the trial period expires. With Premium access, you can learn at your own pace and as frequently as you desire, and you may terminate your subscription prior to the conclusion of the 7-day free trial.
  </p>
)}
<button className="flex w-full items-center justify-between py-5 text-left"
  onClick={() =>
    setOpenQuestion(openQuestion === 1 ? null : 1)
  }
>
  <span className="font-medium text-[#032b41]">
    Can I switch subscriptions from monthly to yearly, or yearly to monthly?
  </span>

  <span>{openQuestion === 1 ? "−" : "+"}</span>
</button>

{openQuestion === 1 && (
  <p className="pb-5 pr-10 text-sm leading-6 text-gray-500">
    While an annual plan is active, it is not feasible to switch to a monthly plan. However, once the current month ends, transitioning from a monthly plan to an annual plan is an option.
  </p>
)}
<button className="flex w-full items-center justify-between py-5 text-left"
  onClick={() =>
     setOpenQuestion(openQuestion === 2 ? null : 2)
  }
>
  <span className="font-medium text-[#032b41]">
    What is included in the Premium Plan?
  </span>

  <span>{openQuestion === 2 ? "−" : "+"}</span>
</button>

{openQuestion === 2 && (
  <p className="pb-5 pr-10 text-sm leading-6 text-gray-500">
    Premium membership provides you with the ultimate Summarist experience, including unrestricted entry to many best-selling books high-quality audio, the ability to download titles for offline reading, and the option to send your reads to your Kindle.
  </p>
)}
<button className="flex w-full items-center justify-between py-5 text-left"
  onClick={() =>
    setOpenQuestion(openQuestion === 3 ? null : 3)
  }
>
  <span className="font-medium text-[#032b41]">
    Can I cancel my trial or subscritption?
  </span>

  <span>{openQuestion === 3 ? "−" : "+"}</span>
</button>

{openQuestion === 3 && (
  <p className="pb-5 pr-10 text-sm leading-6 text-gray-500">
    You will not be charged if you cancel your trial before its conclusion. While you will not have complete access to the entire Summarist library, you can still expand your knowledge with one curated book per day.
  </p>
)}
</div>
</section>
<Footer />
      </main>
  );
}