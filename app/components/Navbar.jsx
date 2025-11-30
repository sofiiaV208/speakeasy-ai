"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 
                    bg-black/40 backdrop-blur-md 
                    px-6 py-4 flex justify-between items-center">

      {/* LEFT — LOGO */}
      <div className="flex items-center gap-3">
        <img
          src="/logo.png"
          width={48}
          height={48}
          alt="Speakeasy AI Logo"
          className="rounded-full"
        />
        <span className="text-white text-xl font-semibold">
          Speakeasy AI
        </span>
      </div>

      {/* RIGHT — MENU */}
      <div className="flex gap-10 items-center text-white text-lg">
        <button className="hover:text-violet-300 transition">
          Features
        </button>

        <button className="hover:text-violet-300 transition">
          Pricing
        </button>

        <button className="hover:text-violet-300 transition">
          For Teachers
        </button>

        <button className="hover:text-violet-300 transition">
          Sign in
        </button>
      </div>
    </nav>
  );
}
