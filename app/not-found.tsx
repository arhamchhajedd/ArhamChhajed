import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-black text-black dark:text-white px-4 transition-colors duration-300">
      <div className="flex flex-col items-center text-center max-w-lg">
        <h1
          className="text-[30vw] sm:text-[20vw] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-b from-black via-zinc-800 to-zinc-400 dark:from-white dark:via-white/90 dark:to-white/40 uppercase tracking-tight"
          style={{ fontFamily: 'var(--font-bebas-neue)' }}
        >
          404
        </h1>

        <p className="text-black/50 dark:text-white/50 font-mono text-xs uppercase tracking-widest mb-2">
          Page Not Found
        </p>
        <p className="text-black/40 dark:text-white/40 text-sm leading-relaxed mb-10 max-w-xs">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          href="/"
          className="group relative inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-red-500 dark:hover:bg-red-500 dark:hover:text-white transition-colors duration-500"
        >
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to Home
        </Link>
      </div>
    </main>
  );
}
