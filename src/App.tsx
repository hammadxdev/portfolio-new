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
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        {/* Mid marquee divider — like Pertest's scrolling ticker */}
        <div className="border-y border-border/60 py-1 overflow-hidden">
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
