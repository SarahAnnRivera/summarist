import type { Book } from "@/app/for-you/page";
import Link from "next/link";

type BookCardProps = {
  book: Book;
};

export default function BookCard({ book }: BookCardProps) {
  return (
    <Link href={`/book/${book.id}`}className="group block w-[150px] shrink-0" >
    <div className="w-full transition-shadow duration-300 group-hover:shadow-lg">
      <div className="relative">
        <img
          src={book.imageLink}
          alt={book.title}
          className="h-[210px] w-full rounded-sm object-cover"
        />

        {book.subscriptionRequired && (
          <span className="absolute right-2 top-2 rounded-full bg-[#032b41] px-2 py-1 text-[10px] font-bold text-white">
            Premium
          </span>
        )}
      </div>

      <h3 className="mt-2 line-clamp-2 text-sm font-bold text-[#032b41]">
        {book.title}
      </h3>

      <p className="mt-1 text-xs text-[#6b757b]">
        {book.author}
      </p>

      <div className="mt-2 flex gap-3 text-xs text-[#6b757b]">
        <span>⭐ {book.averageRating}</span>
        <span>{book.keyIdeas} ideas</span>
      </div>
    </div>
    </Link>
  );
}