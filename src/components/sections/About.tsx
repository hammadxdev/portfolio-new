// src/components/sections/About.tsx
import { motion } from "framer-motion";
import { AnimatedSection } from "../AnimatedSection";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { personal } from "../../data/portfolio";

const services = [
  {
    title: "Full-Stack Development",
    items: [
      "MERN Stack Applications",
      "Next.js SSR/SSG",
      "REST API Design & Integration",
    ],
    link: personal.github,
  },
  {
    title: "Automation & Scraping",
    items: [
      "n8n Workflow Automation",
      "Selenium & BeautifulSoup Bots",
      "Data Extraction Pipelines",
    ],
    link: personal.github,
  },
  {
    title: "Database Engineering",
    items: [
      "MongoDB & PostgreSQL",
      "Airtable Integrations",
      "SQL Query Optimization",
    ],
    link: personal.github,
  },
  {
    title: "Mobile Development",
    items: ["React Native Apps", "Cross-platform UI", "Push Notifications"],
    link: personal.github,
  },
];

export function About() {
  return (
    <section id="about" className="py-24 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              About Me
            </h3>
            <span className="section-line" />
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* ── LEFT — Photos collage ── */}
          <AnimatedSection direction="left" delay={0.1}>
            <div className="relative">
              {/* Main large photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/about-profile.jpg"
                  alt="Muhammad Hammad"
                  className="w-full object-cover"
                  style={{ height: "520px", objectPosition: "center top" }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Name tag at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-bold text-xl">
                    Muhammad Hammad
                  </p>
                  <p className="text-orange-400 text-sm font-medium">
                    Full-Stack Developer · Lahore, PK
                  </p>
                </div>
              </div>

              {/* Small inset photo — bottom right */}
              <motion.div
                className="absolute -bottom-6 -right-4 w-40 h-48 rounded-2xl overflow-hidden border-4 border-background shadow-xl z-10"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.4,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="/images/profile.png"
                  alt="Muhammad Hammad"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>

              {/* Orange accent square */}
              <div className="absolute -top-3 -left-3 w-24 h-24 rounded-xl bg-orange-500/20 border border-orange-500/30 z-0" />

              {/* Experience badge — top right */}
              <motion.div
                className="absolute top-6 right-6 z-20 bg-orange-500 text-white rounded-2xl p-4 shadow-xl"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4, type: "spring" }}
              >
                <div className="text-3xl font-black leading-none">5+</div>
                <div className="text-xs opacity-90 uppercase tracking-wide mt-0.5">
                  Years Exp
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* ── RIGHT — Text & services ── */}
          <AnimatedSection direction="right" delay={0.15} className="lg:pt-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] mb-6">
              I build <span className="text-orange-500">scalable web apps</span>{" "}
              and <span className="text-orange-500">automation systems</span>{" "}
              that solve real problems.
            </h2>

            <div className="flex items-end gap-6 mb-6 pb-6 border-b border-border/50">
              <div>
                <span className="text-5xl font-bold text-orange-500 leading-none">
                  5+
                </span>
                <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
                  Years
                  <br />
                  Experience
                </div>
              </div>
              <div className="h-14 w-px bg-border" />
              <div>
                <span className="text-5xl font-bold leading-none">20+</span>
                <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
                  Projects
                  <br />
                  Delivered
                </div>
              </div>
              <div className="h-14 w-px bg-border" />
              <div>
                <span className="text-5xl font-bold leading-none">4+</span>
                <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
                  Tech
                  <br />
                  Stacks
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
              Based in{" "}
              <strong className="text-foreground">Lahore, Pakistan</strong>, I
              work with clients worldwide delivering production-ready software.
              My stack spans the full spectrum — React interfaces, Node.js APIs,
              Python automation, and n8n workflows.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
              Whether it's architecting a real-time WebRTC platform, scraping
              data at scale, or building a Next.js book platform with SSR — I
              bring technical depth and
              <strong className="text-foreground">
                {" "}
                creative problem-solving
              </strong>{" "}
              to every project.
            </p>

            {/* Services list */}
            <div className="space-y-0 mb-8">
              {services.map((svc, i) => (
                <a
                  key={svc.title}
                  href={svc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-item py-4 px-1 group cursor-pointer"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.45 }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-semibold group-hover:text-orange-500 transition-colors flex items-center gap-2">
                        {svc.title}
                        <Github className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-orange-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <ul className="flex flex-wrap gap-1.5">
                      {svc.items.map((it) => (
                        <li
                          key={it}
                          className="text-xs text-muted-foreground bg-muted/60 px-2.5 py-0.5 rounded-full"
                        >
                          {it}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </a>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-round gap-2 inline-flex"
              >
                Connect on LinkedIn <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-round gap-2 inline-flex"
              >
                View on GitHub <Github className="w-4 h-4" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
