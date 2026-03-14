// src/components/sections/Projects.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ArrowUpRight, Star } from "lucide-react";
import { AnimatedSection } from "../AnimatedSection";
import { projects, personal } from "../../data/portfolio";

const filters = ["All", "Full-Stack", "Automation", "Next.js", "Mobile"];

const tagToFilter: Record<string, string> = {
  "React": "Full-Stack", "Node.js": "Full-Stack", "MongoDB": "Full-Stack",
  "WebRTC": "Full-Stack", "Automation": "Automation", "Selenium": "Automation",
  "BeautifulSoup": "Automation", "n8n": "Automation", "Python": "Automation",
  "Next.js": "Next.js", "TypeScript": "Next.js",
  "React Native": "Mobile",
};

function matches(project: typeof projects[0], filter: string) {
  if (filter === "All") return true;
  return project.tags.some((t) => tagToFilter[t] === filter);
}

const accentBorder: Record<string, string> = {
  purple: "hover:border-violet-400",
  green: "hover:border-emerald-400",
  amber: "hover:border-amber-400",
  blue: "hover:border-blue-400",
  coral: "hover:border-rose-400",
  teal: "hover:border-teal-400",
};

const tagBg: Record<string, string> = {
  purple: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  green: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  amber: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  blue: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  coral: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
  teal: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
};

const colorStrip: Record<string, string> = {
  purple: "bg-violet-500", green: "bg-emerald-500", amber: "bg-amber-500",
  blue: "bg-blue-500", coral: "bg-rose-500", teal: "bg-teal-500",
};

export function Projects() {
  const [active, setActive] = useState("All");
  const visible = projects.filter((p) => matches(p, active));

  return (
    <section id="projects" className="py-24 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6">

        <AnimatedSection className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">Portfolio</h3>
            <span className="section-line" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-bold">Latest Projects</h2>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                    active === f
                      ? "bg-orange-500 border-orange-500 text-white"
                      : "border-border text-muted-foreground hover:border-orange-400 hover:text-orange-500"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {visible.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`project-card group relative rounded-2xl border border-border/60 bg-card overflow-hidden
                            transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${accentBorder[project.color]}`}
              >
                <div className={`h-1 w-full ${colorStrip[project.color]}`} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold pr-4 group-hover:text-orange-500 transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-orange-500/10 text-orange-500 border border-orange-500/20 flex-shrink-0">
                        <Star className="w-2.5 h-2.5 fill-current" />
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${tagBg[project.color]}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <Github className="w-4 h-4" /> Source Code
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-orange-500 transition-colors ml-auto">
                      Live Demo <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <AnimatedSection delay={0.2} className="mt-10 flex justify-center">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn-round gap-2">
            View All on GitHub <ArrowUpRight className="w-4 h-4" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
