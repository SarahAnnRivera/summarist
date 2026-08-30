import Image from "next/image";

 type SidebarProps = {
  showReaderControls?: boolean; 
  compactForPlayer?: boolean;
  onFontSizeChange?: (size: string) => void;
}


export default function Sidebar({
  showReaderControls = false,
  compactForPlayer = false,
  onFontSizeChange,
}: SidebarProps) {



  return (
    <aside className="fixed left-0 top-0 flex h-screen w-[200px] flex-col border-r border-gray-200 bg-white">
      
      {/* Logo */}
      <div className="px-5 py-6">
        <Image
          src="/assets/logo.png"
          alt="Summarist"
          width={160}
          height={40}
        />
      </div>

      {/* Main Navigation */}
      <nav className="flex flex-col">
        <div className="px-5 py-4">For you</div>
        <div className="px-5 py-4">My Library</div>
        <div className="px-5 py-4">Highlights</div>
        <div className="px-5 py-4">Search</div>
        {showReaderControls && (
  <div className="flex items-end gap-4 px-3 py-4">
  <button className="text-sm"
  onClick={() => onFontSizeChange?.("text-sm")}>
    Aa</button>
  <button className="text-base"
  onClick={() => onFontSizeChange?.("text-base")}>
    Aa</button>
  <button className="text-lg"
  onClick={() => onFontSizeChange?.("text-lg")}>
    Aa</button>
  <button className="text-2xl"
  onClick={() => onFontSizeChange?.("text-2xl")}>
    Aa</button>
  </div>
)}
      </nav>

      {/* Bottom Navigation */}
      <div className={compactForPlayer ? "mb-24 mt-auto" : "mt-auto"}>
        <div className="px-5 py-4">Settings</div>
        <div className="px-5 py-4">Help & Support</div>
        <div className="px-5 py-4">Login</div>
      </div>
    </aside>
  );
}