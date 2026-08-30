"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Sidebar from "@/components/Sidebar";
import SearchBar from "@/components/SearchBar";
import type { Book } from "@/app/for-you/page";
import { formatTime } from "@/utilities/formatTime";

export default function PlayerPage() {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [fontSize, setFontSize] = useState("text-lg");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
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

    fetchBook();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!book) {
    return <p>Book not found.</p>;
  }
  const togglePlay = () => {
  const audio = audioRef.current;
  if (!audio) return;

  if (audio.paused) {
    audio.play();
    setIsPlaying(true);
  } else {
    audio.pause();
    setIsPlaying(false);
  }
};

const skipBackward = () => {
  if (audioRef.current) {
    audioRef.current.currentTime -= 10;
  }
};

const skipForward = () => {
  if (audioRef.current) {
    audioRef.current.currentTime += 10;
  }
};

    return (
    <div className="min-h-screen bg-white text-[#032b41]">
      <Sidebar showReaderControls onFontSizeChange={setFontSize} compactForPlayer/>

      <main className="ml-[200px] pb-28">
        <SearchBar />

        <div className="mx-auto max-w-[850px] px-6 py-10">
          <h1 className="text-[30px] font-bold">
            {book.title}
          </h1>

          <p className="mt-2 font-medium">
            {book.author}
          </p>

          <div className="mt-8">
            <h2 className="text-xl font-bold">Summary</h2>

            <p className={`mt-5 leading-8 ${fontSize}`}>
              {book.summary}
            </p>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#032b41] bg-[#032b41] px-8 py-4 text-white">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-8">

  <div className="flex items-center gap-4">
    <img
      src={book.imageLink}
      alt={book.title}
      className="h-14 w-10 object-cover"
    />

    <div>
      <p className="font-medium">{book.title}</p>
      <p className="text-sm opacity-80">{book.author}</p>
    </div>
  </div>

  <div className="flex items-center gap-5">
    <button onClick={skipBackward}>-10</button>

    <button onClick={togglePlay}
    className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl text-[#032b41]">
      {isPlaying ? "Ⅱ" : "▶"}
    </button>

    <button onClick={skipForward}>+10</button>
  </div>

  <div className="flex min-w-[420px] items-center gap-4">
    <span className="text-sm">{formatTime(currentTime)}</span>

    <input
      type="range"
      min="0"
      max="100"
      value="0"
      className="w-full"
      readOnly
    />

    <span className="text-sm">{formatTime(duration)}</span>
  </div>

  <audio
  ref={audioRef}
  src={book.audioLink}
  onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
  onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
/>
</div>
        </div>
      </main>
    </div>
  );
}