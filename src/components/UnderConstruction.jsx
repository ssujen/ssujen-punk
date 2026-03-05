export default function UnderConstruction({ onHomeClick }) {
  return (
    <div className="max-w-[1200px] mx-auto min-h-screen flex flex-col border-x border-neutral-border">
      {/* Header Section */}
      <header className="flex items-center justify-between border-b border-neutral-border px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="size-8 bg-primary rounded flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-xl">terminal</span>
          </div>
          <button onClick={onHomeClick} className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
            ssujen.ai
          </button>
        </div>
      </header>
      
      {/* Main Grid Content */}
      <main className="flex-grow grid grid-cols-12">
        {/* Hero Block */}
        <div className="col-span-12 lg:col-span-8 border-b lg:border-r border-neutral-border p-12 flex flex-col justify-center">
          <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-6 block">System Status: Active</span>
          <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter mb-8">
            Under <br/> Construction
          </h1>
          <p className="text-slate-400 max-w-md text-lg leading-relaxed">
            Blogs and articles about how to use AI to create varieties of Web, App, and Game    
          </p>
        </div>
        
        {/* Progress Block */}
        <div className="col-span-12 lg:col-span-4 border-b border-neutral-border p-12 flex flex-col items-center justify-center bg-primary/5">
          <div className="relative size-48 md:size-64 mb-8">
            {/* Circular Progress Background */}
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle className="text-neutral-border" cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeWidth="2"></circle>
              <circle className="text-primary" cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeDasharray="283" strokeDashoffset="170" strokeWidth="4"></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-black italic">40%</span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500 mt-1">Complete</span>
            </div>
          </div>
          <div className="w-full space-y-2">
            <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold text-slate-500">
              <span>Phase: Alpha</span>
              <span>v0.4.2</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-border p-8 text-center text-slate-500">
        <span className="text-[10px] uppercase">
          © 2026 SSUJEN.DEV — All Rights Reserved
        </span>
      </footer>
    </div>
  );
}
