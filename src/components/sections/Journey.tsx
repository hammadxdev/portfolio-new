// src/components/sections/Journey.tsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedSection } from "../AnimatedSection";
import { journey } from "../../data/portfolio";

function TimelineCard({ item, index }: { item: typeof journey[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative grid grid-cols-[1fr_auto_1fr] gap-6 mb-8 items-start">
      {/* Left content */}
      <div className={`${isLeft ? "col-start-1" : "col-start-3"} ${!isLeft && "row-start-1 col-start-3"}`}>
        {isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-card border border-border/60 rounded-2xl p-5 hover:border-orange-400/50 transition-colors duration-300 text-right"
          >
            <div className="flex items-center justify-end gap-2 mb-2">
              <span className="text-xs font-mono text-orange-500 font-bold">{item.year}</span>
              <span className="text-xl">{item.icon}</span>
            </div>
            <h3 className="text-base font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.description}</p>
            <div className="flex flex-wrap justify-end gap-1.5">
              {item.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ) : <div />}
      </div>

      {/* Center dot */}
      <div className="col-start-2 flex flex-col items-center pt-4">
        <motion.div
          className="timeline-dot z-10"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.2, type: "spring", stiffness: 300 }}
        />
        {index < journey.length - 1 && (
          <motion.div
            className="w-px bg-gradient-to-b from-orange-400/60 to-transparent mt-1"
            style={{ height: "120px" }}
            initial={{ scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          />
        )}
      </div>

      {/* Right content */}
      <div className="col-start-3">
        {!isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-card border border-border/60 rounded-2xl p-5 hover:border-orange-400/50 transition-colors duration-300"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{item.icon}</span>
              <span className="text-xs font-mono text-orange-500 font-bold">{item.year}</span>
            </div>
            <h3 className="text-base font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ) : <div />}
      </div>
    </div>
  );
}

export function Journey() {
  return (
    <section id="journey" className="py-24 border-t border-border/60 bg-muted/10">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="section-line rotate-180" />
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">How I got here</h3>
            <span className="section-line" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Journey</h2>
          <p className="text-muted-foreground max-w-md mx-auto text-sm">
            From writing my first Python script to building full-stack platforms used by real users.
          </p>
        </AnimatedSection>

        <div className="hidden md:block">
          {journey.map((item, i) => (
            <TimelineCard key={item.year} item={item} index={i} />
          ))}
        </div>

        {/* Mobile: vertical stack */}
        <div className="md:hidden flex flex-col gap-4">
          {journey.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-card border border-border/60 rounded-2xl p-5 flex gap-4"
            >
              <div className="flex flex-col items-center">
                <span className="text-2xl">{item.icon}</span>
                {i < journey.length - 1 && <div className="w-px flex-1 bg-border mt-3" />}
              </div>
              <div className="flex-1 pb-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-orange-500 font-bold">{item.year}</span>
                </div>
                <h3 className="text-sm font-bold mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-2">{item.description}</p>
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-500">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
