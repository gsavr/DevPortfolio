import { About } from "./layout/about";
import { Contact } from "./layout/contact";
import { Footer } from "./layout/footer";
import { Hero } from "./layout/hero";
import { Projects } from "./layout/projects";
import { StickyMenu } from "./components/StickyMenu";

export default function Home() {
  return (
    <main id="home">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <StickyMenu />
      <Footer />
    </main>
  );
}
