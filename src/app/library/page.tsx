"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
import BookCard from "@/components/BookCard";
import type { Book } from "@/app/for-you/page";


export default function LibraryPage() {
    const [savedBooks, setSavedBooks] = useState<Book[]>([]);
    const [finishedBooks, setFinishedBooks] = useState<Book[]>([]);

 useEffect(() => {
  const fetchLibraryBooks = async () => {
    try {
      const savedBookIds = JSON.parse(
        localStorage.getItem("savedBooks") || "[]"
      );

      const saved = await Promise.all(
        savedBookIds.map(async (id: string) => {
          const response = await axios.get(
            `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
          );

          return response.data;
        })
      );

      const finishedResponse = await axios.get(
        "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended"
      );

      setSavedBooks(saved);
      setFinishedBooks(finishedResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchLibraryBooks();
}, []);

const handleRemove = (id: string) => {
  const updatedBooks = savedBooks.filter(
    (book) => book.id !== id
  );

  setSavedBooks(updatedBooks);

  const updatedIds = updatedBooks.map(
    (book) => book.id
  );

  localStorage.setItem(
    "savedBooks",
    JSON.stringify(updatedIds)
  );
};


  return (
    <div className="min-h-screen bg-white text-[#032b41]">
      <Sidebar />

      <main className="ml-[200px]">
        <SearchBar />

        <div className="mx-auto max-w-[1070px] px-6 py-8">
          <h1 className="text-2xl font-bold">My Library</h1>

          <section className="mt-8">
            <h2 className="text-xl font-bold">Saved Books</h2>
        <div className="mt-6 flex gap-6">
  {savedBooks.map((book) => (
    <div key={book.id} className="relative">
      <BookCard book={book} />

      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleRemove(book.id);
        }}
        className="absolute right-2 top-2 z-10 rounded-full bg-white px-2 py-1 text-gray-500 shadow hover:text-gray-900"
      >
        ✕
      </button>
    </div>
  ))}
</div>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-bold">Finished</h2>
            <div className="flex gap-10">
                {finishedBooks.slice(0, 4).map((book) => (
            <BookCard key={book.id} book={book} />
              ))}
            </div>
            
          </section>
        </div>
      </main>
    </div>
  );
}

