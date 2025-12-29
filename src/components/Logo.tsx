// src/components/Logo.tsx
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      {/* controlled-size logo image */}
      <img
        src="/logo.png"
        alt="PathToNEET Logo"
        className="h-10 w-auto object-contain"
        width={40}
        height={40}
      />

      {/* compact brand text */}
      <div className="leading-tight">
        <div className="text-lg font-bold text-slate-900">PathToNEET</div>
        <div className="text-xs text-slate-600 -mt-0.5">India’s NEET counselling</div>
      </div>
    </Link>
  );
}
