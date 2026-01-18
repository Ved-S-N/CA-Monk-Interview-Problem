// import type { ReactNode } from "react";

// export default function Layout({
//   left,
//   right,
// }: {
//   left: ReactNode;
//   right: ReactNode;
// }) {
//   return (
//     <div className="min-h-screen bg-zinc-950 text-zinc-100 p-4 sm:p-6">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <div className="lg:col-span-1 space-y-6">{left}</div>
//         <div className="lg:col-span-2">{right}</div>
//       </div>
//     </div>
//   );
// }
import type { ReactNode } from "react";

export default function Layout({
  left,
  right,
  onCreateClick,
}: {
  left: ReactNode;
  right: ReactNode;
  onCreateClick: () => void;
}) {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* Top Navbar */}
      <header className="w-full border-b-2 border-[rgba(253,250,253,1)] bg-[rgba(255,255,255,1)]">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-2">
          <div className="flex items-center gap-2 font-semibold">
            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              C
            </div>
            <span>CA MONK</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
            <span className="hover:text-black cursor-pointer">Tools</span>
            <span className="hover:text-black cursor-pointer">Practice</span>
            <span className="hover:text-black cursor-pointer">Events</span>
            <span className="hover:text-black cursor-pointer">Job Board</span>
            <span className="hover:text-black cursor-pointer">Points</span>

            <button
              onClick={onCreateClick}
              className="rounded-lg  px-0 py-1 text-sm text-zinc-400 hover:text-black"
            >
              + Create Blog
            </button>
          </nav>

          <button className="rounded-lg bg-blue-600 px-3 py-1 text-sm text-white  font-semibold hover:bg-blue-500 transition">
            Profile
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[rgba(255,255,255,1)] py-10  ">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight">
            CA Monk Blog
          </h1>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Stay updated with the latest trends in finance, accounting, and
            career growth
          </p>
        </div>
      </section>

      {/* Main */}
      <main className="max-w-6xl mx-auto bg-[rgba(246,246,248,1)] px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* LEFT */}
          <aside className="md:col-span-1">
            <div className="sticky top-6 h-[calc(100vh-220px)] overflow-y-auto pr-2 space-y-6">
              {left}
            </div>
          </aside>

          {/* RIGHT */}
          <section className="md:col-span-2">
            <div className="sticky top-6 h-[calc(100vh-220px)] overflow-y-auto pr-2">
              {right}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-zinc-950 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-zinc-400 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="font-semibold text-white mb-2">CA MONK</div>
            <p>
              Empowering the next generation of financial leaders with tools,
              community, and knowledge.
            </p>
          </div>
          <div>
            <div className="font-semibold text-white mb-2">RESOURCES</div>
            <p>Blog</p>
            <p>Webinars</p>
            <p>Case Studies</p>
          </div>
          <div>
            <div className="font-semibold text-white mb-2">PLATFORM</div>
            <p>Job Board</p>
            <p>Practice Tests</p>
            <p>Mentorship</p>
          </div>
          <div>
            <div className="font-semibold text-white mb-2">CONNECT</div>
            <p>LinkedIn</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pb-6 text-xs text-zinc-500 flex justify-between">
          <span>© 2026 CA Monk. All rights reserved.</span>
          <span className="space-x-4">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms of Service
            </span>
          </span>
        </div>
      </footer>
    </div>
  );
}
