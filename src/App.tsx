// src/App.tsx
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Journey } from "./components/sections/Journey";
import { Contact } from "./components/sections/Contact";
import { Marquee } from "./components/Marquee";

const midMarquee = [
  "Full-Stack Dev", "React Expert", "Node.js", "Automation", "n8n", "Web Scraping",
  "PostgreSQL", "MongoDB", "React Native", "API Integration",
];

function App() {
  return (
    <div className="site-shell min-h-screen text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        {/* Mid marquee divider — like Pertest's scrolling ticker */}
        <div className="glass-panel border-x-0 rounded-none py-1 overflow-hidden">
          <Marquee items={midMarquee} size="md" reverse />
        </div>
        <Projects />
        <Journey />
        <Contact />
      </main>
    </div>
  );
}

export default App;
