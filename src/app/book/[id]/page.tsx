"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import type { Book } from "@/app/for-you/page";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { auth } from "@/firebase";
import { openModal } from "@/authModalSlice";

export default function BookPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const dispatch = useDispatch();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);

 const fetchBook = async () => {
  try {
    const response = await axios.get(
      `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
    );
    setBook(response.data);
    setLoading(false);
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};

useEffect(() => {
  fetchBook();
}, [id]);

const handleReadListen = () => {
  const user = auth.currentUser;

  if (!user) {
    dispatch(openModal());
    return;
  }

  if (book?.subscriptionRequired) {
    router.push("/choose-plan");
    return;
  }

  router.push(`/player/${book?.id}`);
};

if (loading) {
  return <p>Loading...</p>;
}

if (!book) {
  return <p>Book not found.</p>;
}

const handleAddToLibrary = () => {
  if (!book) return;

  const savedBooks = JSON.parse(
    localStorage.getItem("savedBooks") || "[]"
  );

  if (!savedBooks.includes(book.id)) {
    const updatedBooks = [...savedBooks, book.id];

    localStorage.setItem(
      "savedBooks",
      JSON.stringify(updatedBooks)
    );
  }
};

return (
  <div className="min-h-screen bg-white text-[#032b41]">
    <Sidebar />

    <main className="md:ml-[200px]">
      <SearchBar />

      <div className="mx-auto max-w-[1070px] px-6 py-8">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-12">
  {/* LEFT */}
  <div className="max-w-[650px] flex-1">
    <h1 className="text-[32px] font-bold leading-tight">
      {book.title}
    </h1>

    <p className="mt-5 font-bold">
      {book.author}
    </p>

    <p className="mt-5 text-xl">
      {book.subTitle}
    </p>

    <div className="my-5 border-t border-gray-200" />

    {/* DETAILS */}
    <div className="grid grid-cols-2 gap-y-5 text-sm font-medium">
      <div>☆ {book.averageRating} ({book.totalRating} ratings)</div>

      <div>◷ Duration</div>

      <div>🎙 {book.type}</div>

      <div>💡 {book.keyIdeas} Key ideas</div>
    </div>

    <div className="my-5 border-t border-gray-200" />

    {/* ACTIONS */}
    <div className="flex flex-col gap-4 sm:flex-row">
      <button onClick={handleReadListen}
      className="w-full rounded bg-[#032b41] px-6 py-3 font-medium text-white sm:min-w-[175px] sm:w-auto">
        ▣ &nbsp; Read
      </button>

      <button onClick={handleReadListen}
       className="w-full rounded bg-[#032b41] px-6 py-3 font-medium text-white sm:min-w-[175px] sm:w-auto">
        🎙 &nbsp; Listen
      </button>
    </div>

    <button onClick={handleAddToLibrary} 
    className="mt-6 font-medium text-[#0365f2]">
      ♧ &nbsp; Add title to My Library
    </button>
  </div>

  {/* RIGHT */}
  <div className="mx-auto w-[200px] sm:w-[250px] md:mx-0">
    <img
      src={book.imageLink}
      alt={book.title}
      className="w-[250px]"
    />
  </div>
</div>
<div className="mt-14 max-w-[700px]">
  <h2 className="text-xl font-bold">
    What's it about?
  </h2>

  <div className="mt-5 flex flex-wrap gap-4">
    {book.tags.map((tag) => (
      <div
        key={tag}
        className="rounded bg-[#f1f6f4] px-5 py-4 font-medium"
      >
        {tag}
      </div>
    ))}
  </div>

  <p className="mt-5 leading-7">
    {book.bookDescription}
  </p>

  <h2 className="mt-7 text-xl font-bold">
    About the author
  </h2>

  <p className="mt-5 leading-7">
    {book.authorDescription}
  </p>
</div>
      </div>
    </main>
  </div>
);
}
