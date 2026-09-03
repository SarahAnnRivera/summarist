"use client";

import { useEffect, useState, useRef } from "react";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
import axios from "axios";
import BookCard from "@/components/BookCard";
import { formatTime } from "@/utilities/formatTime";


export type Book = {
  id: string;
  title: string;
  author: string;
  subTitle: string;
  imageLink: string;
  audioLink: string;
  averageRating: number;
  totalRating: number;
  keyIdeas: number;
  subscriptionRequired: boolean;
  bookDescription: string;
  authorDescription: string;
  summary: string;
  tags: string[];
  status: string;
  type: string;
};

export default function ForYouPage() {

  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [recommendedBooks, setRecommendedBooks] = useState<Book[]>([]);
  const [suggestedBooks, setSuggestedBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioDuration, setAudioDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const fetchBook = async () => {
  try {
    const response = await axios.get(
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected"
    );

    setSelectedBook(response.data[0]);
    setLoading(false);
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};

  const fetchRecommendedBooks = async () => {
  try {
    const response = await axios.get(
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended"
    );
    
    setRecommendedBooks(response.data);
  } catch (error) {
    console.log(error);
  }
};

 const fetchSuggestedBooks = async () => {
  try {
    const response = await axios.get(
      "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested"
    );
    setSuggestedBooks(response.data);
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  fetchBook();
  fetchRecommendedBooks();
  fetchSuggestedBooks();
}, []);

useEffect(() => {
  if (!selectedBook) return;

  const audio = new Audio(selectedBook.audioLink);
  audioRef.current = audio;

  const handleMetadata = () => {
    if (Number.isFinite(audio.duration)) {
      setAudioDuration(audio.duration);
    }
  };

   const handleTimeUpdate = () => {
    setCurrentTime(audio.currentTime);
  };

  audio.addEventListener("loadedmetadata", handleMetadata);
   audio.addEventListener("timeupdate", handleTimeUpdate);

  return () => {
    audio.pause();
    audio.removeEventListener("loadedmetadata", handleMetadata);
    audio.removeEventListener("timeupdate", handleTimeUpdate);
    audioRef.current = null;
  };
}, [selectedBook]);

  return (
    <div className="min-h-screen bg-white text-[#032b41]">
      <Sidebar />

      <main className="md:ml-[200px]">
        <SearchBar />

        <div className="mx-auto max-w-[1070px] px-4 py-8 md:px-6">
          
          <section className="mb-10">
            <h2 className="mb-4 text-[22px] font-bold">
              Selected just for you
            </h2>

            {loading ? (
                <p>Loading...</p>
) : (
  <div className="flex max-w-[700px] flex-col items-center gap-6 rounded-md bg-[#fff3d7] p-4 md:flex-row md:gap-8 md:p-6">

  <div className="flex self-stretch items-start border-b border-gray-300 pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-8">
     <p className="text-left text-sm leading-6 text-[#394547]">
      {selectedBook?.subTitle}
    </p>
  </div>

  <img
    src={selectedBook?.imageLink}
    alt={selectedBook?.title}
    className="h-[160px] w-[100px] object-cover"
  />

  <div className="max-w-[430px]">
    <h3 className="text-l font-bold">
      {selectedBook?.title}
    </h3>

    <p className="mt-2 text-sm font-medium">
      {selectedBook?.author}
    </p>

   
   <div className="mt-4 flex items-center gap-3">
  <button
  onClick={() => {
  const audio = audioRef.current;

  if (!audio) return;

  if (audio.paused) {
    audio.play();
    setIsPlaying(true);
  } else {
    audio.pause();
    setIsPlaying(false);
  }
}}
    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#032b41] text-white"
  >
    {isPlaying ? "⏸" : "▶"}
  </button>

  <div>
    <p className="text-sm font-medium">
  {formatTime(Math.max(audioDuration - currentTime, 0))}
</p>
    <p className="text-xs text-[#6b757b]">Listen now</p>
  </div>
</div>
  </div>
</div>
  )}
          </section>

          <section className="mb-10">
            <h2 className="text-[22px] font-bold">
              Recommended For You
            </h2>
            <p className="mb-4 text-sm text-[#394547]">
              We think you'll like these
            </p>

            <div className="flex gap-10 overflow-x-auto pb-4">
  {recommendedBooks.map((book) => (
   <BookCard key={book.id} book={book} />
  ))}
</div>
          </section>

          <section>
            <h2 className="text-[22px] font-bold">
              Suggested Books
            </h2>
            <p className="mb-4 text-sm text-[#394547]">
              Browse those books
            </p>

            <div className="flex gap-10 overflow-x-auto pb-4">
  {suggestedBooks.map((book) => (
   <BookCard key={book.id} book={book} />
  ))}
</div>
          </section>

        </div>
      </main>
    </div>
  );
}