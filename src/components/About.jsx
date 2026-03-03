export default function About() {
  return (
    <section className="py-24 px-6 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img
                alt="Ssujen Punk"
                className="w-full h-full object-cover"
                src="/ssujen-punk.jpeg"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-primary z-0 opacity-50"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-primary z-0 opacity-50"></div>
          </div>
          <div>
            <h2 className="text-primary font-bold tracking-widest uppercase mb-4">Behind the goggles</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8 dark:text-white leading-tight italic">
              Engineering with a <span className="not-italic text-primary">Creative Soul</span>
            </h3>
            <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg">
              <p>
                Hi, I'm <span className="text-slate-900 dark:text-white font-semibold">Ssujen Lu</span>. After a career in core software engineering, I've dedicated my current focus to the intersection of traditional mechanics and cutting-edge artificial intelligence.
              </p>
              <p>
                My philosophy is simple: technology should handle the repetitive and mundane, freeing us to pursue truly human creativity. Whether it's through amateur radio experiments, 3D hardware design, or complex web architectures, I'm always looking for ways to push the boundaries of what's possible.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <span className="material-icons text-primary">radio</span>
                  <span className="text-sm font-bold uppercase tracking-wider">Amateur Radio</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-icons text-primary">precision_manufacturing</span>
                  <span className="text-sm font-bold uppercase tracking-wider">Hardware DIY</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-icons text-primary">code</span>
                  <span className="text-sm font-bold uppercase tracking-wider">System Arch</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-icons text-primary">smart_toy</span>
                  <span className="text-sm font-bold uppercase tracking-wider">AI Integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
