export default function SearchBar() {
  return (
    <div className="flex h-20 items-center justify-end border-b border-gray-200 px-8">
      <div className="w-full max-w-[340px]">
        <input
          type="text"
          placeholder="Search for books"
          className="h-10 w-full rounded-md border border-gray-300 px-4 outline-none"
        />
      </div>
    </div>
  );
}