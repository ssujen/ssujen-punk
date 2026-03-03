export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-slate-500 dark:text-slate-400 text-sm">
          © {new Date().getFullYear()} ssujen.ai — All gears turning.
        </div>
        <div className="flex gap-6 text-sm font-bold uppercase tracking-widest text-slate-400">
          <a className="hover:text-primary transition-colors" href="#">Privacy</a>
          <a className="hover:text-primary transition-colors" href="#">Terms</a>
          <a className="hover:text-primary transition-colors" href="#">Creative Commons</a>
        </div>
      </div>
    </footer>
  );
}
