export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-bg px-6 pt-20">
      <div className="text-center max-w-4xl">
        <h2 className="text-primary font-bold uppercase tracking-[0.2em] mb-4 animate-pulse">
          Retired Software Engineer & Creator
        </h2>
        <h1 className="text-5xl md:text-8xl font-serif italic text-white mb-8 leading-tight text-glow">
          Let's be creative, <br />
          <span className="text-primary not-italic font-display font-bold">
            Let AI do the grunt work!
          </span>
        </h1>
        <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Blending the precision of classic engineering with the limitless potential of artificial intelligence. Based in the San Francisco Bay Area.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            className="bg-primary text-background-dark font-bold py-4 px-10 rounded-full text-lg transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            href="#projects"
          >
            View My Work
          </a>
          <a
            className="glass-card text-white font-semibold py-4 px-10 rounded-full text-lg hover:bg-white/10 transition-all border border-white/20"
            href="#contact"
          >
            Get In Touch
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-primary/50">
        <span className="material-icons text-4xl">expand_more</span>
      </div>
    </section>
  );
}
