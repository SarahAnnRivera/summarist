"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";



export default function SearchBar() {
  const [search, setSearch] = useState("");
const [results, setResults] = useState<any[]>([]);

useEffect(() => {
  if (!search.trim()) {
    setResults([]);
    return;
  }

  const timer = setTimeout(async () => {
    try {
      const response = await axios.get(
        `https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${search}`
      );

      setResults(response.data);
    } catch (error) {
      console.error(error);
    }
  }, 300);

  function AudioDuration({ src }: { src: string }) {
  const [duration, setDuration] = useState<number | null>(null);

  useEffect(() => {
    const audio = new Audio(src);

    const handleMetadata = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("loadedmetadata", handleMetadata);

    return () => {
      audio.removeEventListener("loadedmetadata", handleMetadata);
    };
  }, [src]);

  if (duration === null) return null;

  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration % 60);

  return (
    <p className="text-xs text-gray-400">
      🎧 {minutes}:{seconds.toString().padStart(2, "0")}
    </p>
  );
}

  return () => clearTimeout(timer);
}, [search]);
  return (
    <div className="flex h-20 items-center justify-end border-b border-gray-200 px-8">
      <div className="relative w-full max-w-[340px]">
       <input
  type="text"
  placeholder="Search for books"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="h-10 w-full rounded-md border border-gray-300 px-4 outline-none"
/>
{results.length > 0 && (
  <div className="absolute right-0 top-12 z-50 max-h-[400px] w-full overflow-y-auto rounded-md border border-gray-200 bg-white shadow-lg">
    {results.map((book) => (
      <Link
        key={book.id}
        href={`/book/${book.id}`}
        onClick={() => {
          setSearch("");
          setResults([]);
        }}
        className="flex gap-3 border-b border-gray-100 p-3 hover:bg-gray-50"
      >
        <img
          src={book.imageLink}
          alt={book.title}
          className="h-16 w-12 object-cover"
        />

        <div className="min-w-0">
          <p className="truncate font-medium text-[#032b41]">
            {book.title}
          </p>

          <p className="text-sm text-gray-500">
            {book.author}
          </p>

          <p className="text-xs text-gray-500">
  🎧 {book.duration}
</p>
        </div>
      </Link>
    ))}
  </div>
)}
      </div>
    </div>
  );
}