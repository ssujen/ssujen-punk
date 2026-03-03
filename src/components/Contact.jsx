export default function Contact() {
  return (
    <section className="py-24 px-6 bg-slate-900 text-white" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-primary font-bold tracking-widest uppercase mb-4">Connection</h2>
        <h3 className="text-4xl md:text-6xl font-serif mb-12 italic">
          Let's build the <span className="text-primary not-italic">future</span> together
        </h3>
        <div className="bg-white/5 border border-white/10 p-12 rounded-3xl backdrop-blur-sm">
          <p className="text-slate-400 mb-8 text-xl">Ready for collaboration or just want to chat about AI?</p>
          <a className="text-3xl md:text-5xl font-bold text-white hover:text-primary transition-all break-all" href="mailto:ssujenlu@gmail.com">
            ssujenlu@gmail.com
          </a>
          <div className="flex justify-center flex-wrap gap-8 mt-12">
            <a className="flex flex-col items-center gap-2 group" href="http://ssujen.com" target="_blank" rel="noreferrer">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-slate-900 transition-all">
                <span className="material-icons">language</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-tighter opacity-50 group-hover:opacity-100">Website</span>
            </a>
            <a className="flex flex-col items-center gap-2 group" href="https://github.com/ssujen" target="_blank" rel="noreferrer">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-slate-900 transition-all">
                <span className="material-icons">terminal</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-tighter opacity-50 group-hover:opacity-100">GitHub</span>
            </a>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-slate-900 transition-all">
                <span className="material-icons">place</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-tighter opacity-50 group-hover:opacity-100">SF Bay Area</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
