export default function Projects() {
  const projectsData = [
    {
      icon: 'auto_awesome',
      title: 'react-scroll-parallax',
      description: 'React components to create parallax scroll effects for banners, images or any other DOM elements with high performance.',
      color: 'bg-yellow-400',
      tech: 'JavaScript',
    },
    {
      icon: 'architecture',
      title: 'FreeCAD-library',
      description: 'A massive library of parts for FreeCAD. Streamlining hardware engineering design workflows for makers and pros.',
      color: 'bg-red-500',
      tech: 'HTML / CAD',
    },
    {
      icon: 'psychology',
      title: 'GenAI',
      description: 'Exploratory GenAI projects utilizing latest LLM models and diffusion techniques for creative automation.',
      color: 'bg-blue-500',
      tech: 'Python / AI',
    },
    {
      icon: 'terminal',
      title: 'tinygo-wasm-webgl-demo',
      description: 'Experiments in low-level web performance using TinyGo, WebAssembly, and WebGL rendering.',
      color: 'bg-yellow-400',
      tech: 'Go / WASM',
    },
    {
      icon: 'groups',
      title: 'GopherSocial',
      description: 'A robust backend engineering project built with Go, focusing on scalability and performance in social networking.',
      color: 'bg-cyan-500',
      tech: 'Go',
    },
    {
      icon: 'view_in_ar',
      title: 'Three.js-Boilerplate',
      description: 'TypeScript-ready Three.js boilerplate for rapidly prototyping 3D web experiences and visualizations.',
      color: 'bg-blue-600',
      tech: 'TypeScript',
    }
  ];

  return (
    <section className="py-24 px-6 bg-background-light dark:bg-slate-900/50" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-primary font-bold tracking-widest uppercase mb-2">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-serif dark:text-white">Selected Works</h3>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-md">
            Explore a collection of open-source projects ranging from parallax engines to hardware libraries and AI experiments.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <div key={idx} className="group relative bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-700 hover:-translate-y-2">
              <div className="flex justify-between items-start mb-6">
                <span className="material-icons text-primary text-4xl">{project.icon}</span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500">Public</span>
              </div>
              <h4 className="text-xl font-bold mb-3 dark:text-white group-hover:text-primary transition-colors">{project.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${project.color}`}></span>
                  <span className="text-xs font-semibold uppercase tracking-wider">{project.tech}</span>
                </div>
                <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                  <span className="material-icons">open_in_new</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            className="inline-flex items-center gap-2 text-primary hover:text-white hover:bg-primary px-8 py-3 border-2 border-primary rounded-full font-bold transition-all"
            href="https://github.com/ssujen"
            target="_blank"
            rel="noreferrer"
          >
            <span>Follow on GitHub</span>
            <span className="material-icons text-sm">trending_flat</span>
          </a>
        </div>
      </div>
    </section>
  );
}
